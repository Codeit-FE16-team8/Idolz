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
  return (
    <Container>
      <LeftSide>
        <MyCreditTitle>내 크레딧</MyCreditTitle>
        <CreditMoney>
          <img src={credit} alt="크래딧 아이콘" />
          360000
        </CreditMoney>
      </LeftSide>
      <RightSide>
        <MyCreditCharge />
      </RightSide>
    </Container>
  );
}
export default MyCredit;
