import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

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
`;

const SkeletonBox = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonText = styled(SkeletonBox)`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '16px'};
`;

const SkeletonCircle = styled(SkeletonBox)`
  border-radius: 50%;
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
`;

const MyCreditTitle = styled.div`
  color: var(--color-gray-828282);
  margin-bottom: 8px;
`;

function MyCreditSkeleton() {
  return (
    <Container>
      <LeftSide>
        <MyCreditTitle>
          <SkeletonText width="80px" height="16px" />
        </MyCreditTitle>
        <CreditMoney>
          <SkeletonCircle size="24px" />
          <SkeletonText width="100px" height="24px" />
        </CreditMoney>
      </LeftSide>
      <RightSide>
        <SkeletonText width="60px" height="36px" />
      </RightSide>
    </Container>
  );
}

export default MyCreditSkeleton;
