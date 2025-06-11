// 마이 페이지 컴포넌트
import React, { useEffect, useState } from 'react';
import { getAllIdols } from '../api/idol';
import BtnPagination from '../components/Btn_Pagination';
import IdolProfile from '../components/IdolProfile';
import '../styles/MyPage.css';
import Button from '../components/Button';

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
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setItemsPerPage(6); // 모바일: 3개 x 2줄
      } else if (width < 1200) {
        setItemsPerPage(8); // 태블릿: 4개 x 2줄
      } else {
        setItemsPerPage(16); // 데스크탑: 8개 x 2줄
      }
    };

    updateItemsPerPage(); // 초기 실행
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); //모바일 여부 상태 판별별: 모바일 스크롤용

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="myPage-container">
      <h2 className="section-title">내가 관심있는 아이돌</h2>

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
      <div className="interested-divider" />
      {/* 추가할 아이돌 목록 */}
      <h2 className="section-title">관심있는 아이돌을 추가해보세요.</h2>
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
        <div className="myPage__idolList">
          {(isMobile ? idols : currentItems).map((idol) => (
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
        <Button height="large" width="255px" radius="round" ariaLabel="추가하기" onClick={handleAddInterested}>
          + 추가하기
        </Button>
      </div>
    </div>
  );
}

export default MyPage;
