// 마이 페이지 컴포넌트
import React, { useEffect, useState } from 'react';
import { getAllIdols } from '../api/api';
import Header from '../components/Header';
import IdolProfile from '../components/IdolProfile';
import '../styles/common.css';

function MyPage() {
  const [idols, setIdols] = useState([]);

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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '10px',
          marginTop: '20px',
          maxHeight: 'calc(2 * 120px)',
        }}
      >
        {console.log(idols)}
        {idols.slice(0, 16).map((idol) => (
          <IdolProfile
            key={idol.id}
            profileImg={idol.profilePicture}
            alt={idol.name}
            idolName={idol.name}
            idolGroup={idol.group}
          />
        ))}
      </div>
    </div>
  );
}

export default MyPage;
