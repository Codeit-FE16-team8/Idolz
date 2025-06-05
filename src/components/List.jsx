import WaitingDonation from './WaitingDonation';
import MonthlyChart from './MonthlyChart';
import MyCredit from './MyCredit';
import { getAllIdols } from '../api/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column; // 세로 정렬
  align-items: center; // 가로 중앙 정렬
  justify-content: center; // 세로 중앙 정렬 (필요하면)
  min-height: 100vh; // 화면 전체 높이 맞춤 (필요하면)
  padding: 20px;
  box-sizing: border-box;
`;

function List() {
  const [idols, setIdols] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function IdolsData() {
      const idolData = await getAllIdols();
      setIdols(idolData);
      setLoading(false);
    }

    IdolsData();
  }, []);

  if (loading) return <p>로딩중</p>;

  return (
    <div>
      <MyCredit />
      <WaitingDonation idols={idols} />
      <MonthlyChart idols={idols} />
    </div>
  );
}

export default List;
