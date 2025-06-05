import WaitingDonation from './WaitingDonation';
import MonthlyChart from './MonthlyChart';
import MyCredit from './MyCredit';
import { getAllIdols } from '../api/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
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
      <Container>
        <MyCredit />
        <WaitingDonation idols={idols} />
        <MonthlyChart idols={idols} />
      </Container>
    </div>
  );
}

export default List;
