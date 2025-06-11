import MyCreditCharge from '../modal/MyCreditCharge';
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
    height: 87px;
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

function MyCredit({ creditAmount, onCharge }) {
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
        <MyCreditCharge onCharge={onCharge} />
      </RightSide>
    </Container>
  );
}

export default MyCredit;
