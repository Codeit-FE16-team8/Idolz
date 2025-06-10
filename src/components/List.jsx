import WaitingDonation from './WaitingDonation';
import MonthlyChart from './MonthlyChart';
import MyCredit from './MyCredit';
import { getAllIdols } from '../api/idol';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

function List() {
  const [idols, setIdols] = useState([]);
  const [loading, setLoading] = useState(true);

  const [creditAmount, setCreditAmount] = useState(0);

  useEffect(() => {
    async function IdolsData() {
      const idolData = await getAllIdols();
      setIdols(idolData);
      setLoading(false);
    }

    IdolsData();
  }, []);

  // 컴포넌트 마운트 시 로컬스토리지에서 크레딧 읽어오기
  useEffect(() => {
    const savedCredit = localStorage.getItem('myCredit');
    if (savedCredit) {
      setCreditAmount(parseInt(savedCredit, 10));
    } else {
      localStorage.setItem('myCredit', '0');
      setCreditAmount(0);
    }
  }, []);

  // 크레딧 충전 함수
  const handleChargeCredit = (chargeAmount) => {
    const newAmount = creditAmount + chargeAmount;
    setCreditAmount(newAmount);
    localStorage.setItem('myCredit', newAmount.toString());
  };

  // 후원 함수 (크레딧 차감)
  const handleDonation = (donationAmount) => {
    if (creditAmount >= donationAmount) {
      const newAmount = creditAmount - donationAmount;
      setCreditAmount(newAmount);
      localStorage.setItem('myCredit', newAmount.toString());
      return true; // 후원 성공
    }
    return false; // 크레딧 부족
  };

  if (loading) return <p>로딩 중</p>;

  return (
    <div>
      <Container>
        <MyCredit creditAmount={creditAmount} onCharge={handleChargeCredit} />
        <WaitingDonation idols={idols} creditAmount={creditAmount} onDonation={handleDonation} />
        <MonthlyChart idols={idols} />
      </Container>
    </div>
  );
}

export default List;
