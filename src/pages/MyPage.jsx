// 마이 페이지 컴포넌트
import React, { useEffect, useState } from 'react';
import { getAllIdols } from '../api/api';
import Header from '../components/Header';

function MyPage() {
  // const [idols, setIdols] = useState([]);

  useEffect(() => {
    async function loadIdols() {
      const data = await getAllIdols();
      // setIdols(data);
    }

    loadIdols();
  }, []);

  return (
    <div>
      <Header />
      <h2>내가 관심있는 아이돌</h2>

      <h2>관심있는 아이돌을 추가해보세요.</h2>
    </div>
  );
}

export default MyPage;
