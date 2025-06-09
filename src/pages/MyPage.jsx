// 마이 페이지 컴포넌트
import React, { useEffect, useState } from 'react';
import { getAllIdols } from '../api/api';
import BtnPagination from '../components/Btn_Pagination';
import IdolProfile from '../components/IdolProfile';
import '../styles/common.css';
import '../styles/MyPage.css';

function MyPage() {
  const [idols, setIdols] = useState([]); //전체 아이돌
  const [selectedIds, setSelectedIds] = useState([]); // 선택한 아이돌 id 목록

  const [interestedIdols, setInterestedIdols] = useState(() => {
    // localStorage 초기값 로딩
    const saved = localStorage.getItem('interestedIdols');
    return saved ? JSON.parse(saved) : [];
  });

  // 페이지네이션 상태 관리
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(idols.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = idols.slice(startIdx, startIdx + itemsPerPage);
  // 관심 아이돌 체크 관리
  const toggleSelectIdol = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };
  //관심 있는 아이돌 추가하기 버튼 클릭 핸들러 함수
  const handleAddInterested = () => {
    const newSelections = idols.filter((idol) => selectedIds.includes(idol.id));
    const merged = [...interestedIdols];

    newSelections.forEach((idol) => {
      if (!merged.find((i) => i.id === idol.id)) {
        merged.push(idol);
      }
    });
    setInterestedIdols(merged);
    localStorage.setItem('interestedIdols', JSON.stringify(merged));
    setSelectedIds([]); // 체크 상태 초기화
  };
  const handleRemoveInterested = (id) => {
    const updated = interestedIdols.filter((idol) => idol.id !== id);
    setInterestedIdols(updated);
    localStorage.setItem('interestedIdols', JSON.stringify(updated));
  }; // 관심 아이돌 삭제 핸들러 함수

  useEffect(() => {
    async function loadIdols() {
      const data = await getAllIdols();
      setIdols(data);
    }

    loadIdols();
  }, []);

  return (
    <div>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '12px',
          minHeight: 'auto',
          paddingTop: '12px',
          textAlign: 'left',
        }}
      >
        내가 관심있는 아이돌
      </h2>

      <div className="interested-scroll-wrapper">
        {interestedIdols.map((idol) => (
          <IdolProfile
            key={idol.id}
            profileImg={idol.profilePicture}
            alt={idol.name}
            idolName={idol.name}
            idolGroup={idol.group}
            isDelete={true}
            onDelete={() => handleRemoveInterested(idol.id)}
          />
        ))}
      </div>
      {/* 추가할 아이돌 목록 */}
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        관심있는 아이돌을 추가해보세요.
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '24px',
          flexWrap: 'nowrap',
          height: 'auto',
        }}
      >
        {/* 왼쪽 이동 버튼 */}
        <BtnPagination
          direction="left"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        />

        {/* 아이돌 프로필 카드들 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: '10px',
            minHeight: '240px',
            justifyContent: 'center',
          }}
        >
          {currentItems.map((idol) => (
            <IdolProfile
              key={idol.id}
              profileImg={idol.profilePicture}
              alt={idol.name}
              idolName={idol.name}
              idolGroup={idol.group}
              isSelect={selectedIds.includes(idol.id)}
              onClick={() => toggleSelectIdol(idol.id)}
            />
          ))}
        </div>

        {/* 오른쪽 이동 버튼 */}
        <BtnPagination
          direction="right"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        />
      </div>

      {/* 추가하기 버튼 */}
      <div className="my-add-button-wrapper">
        <button onClick={handleAddInterested}> + 추가하기</button>
      </div>
    </div>
  );
}

export default MyPage;
