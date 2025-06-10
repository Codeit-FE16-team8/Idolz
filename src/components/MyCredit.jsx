import React, { useState, useEffect } from 'react';
import MyCreditCharge from './MyCreditCharge';
import styled from 'styled-components';
import credit from '../assets/images/credit.png';

const Container = styled.div`
  border: 1px solid var(--color-white-F7F7F8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 131px;
  padding: 0 78px;
  border-radius: var(--border-radius-sm);
  margin-bottom: 50px;

  @media (max-width: 768px) {
    padding: 0 64px;
  }

  @media (max-width: 480px) {
    padding: 0 24px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightSide = styled.div`
  margin-right: 10px;
`;

const CreditMoney = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xxl);
`;

const MyCreditTitle = styled.div`
  color: var(--color-gray-828282);
  margin-bottom: 8px;
`;

function MyCredit() {
  const [creditAmount, setCreditAmount] = useState(0);

  useEffect(() => {
    // 로컬스토리지에서 크레딧 읽어오기, 없으면 0으로 초기화
    const savedCredit = localStorage.getItem('myCredit');
    if (savedCredit) {
      setCreditAmount(parseInt(savedCredit, 10));
    } else {
      localStorage.setItem('myCredit', '0');
      setCreditAmount(0);
    }
  }, []);

  // 충전 함수 (CreditChargeModal에서 호출할 예정)
  const handleCharge = (chargeAmount) => {
    const newAmount = creditAmount + chargeAmount;
    setCreditAmount(newAmount);
    localStorage.setItem('myCredit', newAmount.toString());
  };

  return (
    <Container>
      <LeftSide>
        <MyCreditTitle>내 크레딧</MyCreditTitle>
        <CreditMoney>
          <img src={credit} alt="크래딧 아이콘" />
          {creditAmount.toLocaleString()}
        </CreditMoney>
      </LeftSide>
      <RightSide>
        <MyCreditCharge onCharge={handleCharge} />
      </RightSide>
    </Container>
  );
}

export default MyCredit;
