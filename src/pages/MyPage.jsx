// 마이 페이지 컴포넌트
import React, { useEffect, useState } from 'react';
import { getAllIdols } from '../api/api';
import Header from '../components/Header';
import BtnPagination from '../components/Btn_Pagination';
import IdolProfile from '../components/IdolProfile';
import '../styles/common.css';

function MyPage() {
  const [idols, setIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalPages = Math.ceil(idols.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = idols.slice(startIdx, startIdx + itemsPerPage);

  useEffect(() => {
    async function loadIdols() {
      const data = await getAllIdols();
      setIdols(data);
    }

    loadIdols();
  }, []);

  return (
    <div>
      <Header />
      <h2>내가 관심있는 아이돌</h2>
      {/* 내가 관심 등록한 아이돌 렌더링 추후에 추가 */}

      <h2>관심있는 아이돌을 추가해보세요.</h2>

      {/* 좌우 버튼 + 프로필 그리드 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '24px',
        }}
      >
        {/* 왼쪽 이동 버튼 */}
        <BtnPagination
          direction="left"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        />

        {/* 프로필 그리드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: '10px',
            maxHeight: 'calc(2 * 120px)',
          }}
        >
          {currentItems.map((idol) => (
            <IdolProfile
              key={idol.id}
              profileImg={idol.profilePicture}
              alt={idol.name}
              idolName={idol.name}
              idolGroup={idol.group}
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
    </div>
  );
}

export default MyPage;
