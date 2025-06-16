import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const MonthlyChartContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MonthlyChartHeader = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

const SkeletonTitle = styled.div`
  width: 140px;
  height: 28px;
  background-color: var(--color-gray-A3A5A8);
  border-radius: 6px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonButton = styled.div`
  width: 120px;
  height: 36px;
  background-color: var(--color-gray-A3A5A8);
  border-radius: 999px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SelectGenderButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const SkeletonGenderButton = styled.div`
  flex: 1;
  height: 42px;
  margin-right: 8px;
  background-color: var(--color-gray-A3A5A8);
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;

  &:last-child {
    margin-right: 0;
  }
`;

const IdolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;

const IdolItem = styled.div`
  width: 49%;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const IdolCardSkeleton = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  background-color: var(--color-gray-A3A5A8);
  border-radius: var(--border-radius-md);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

function MonthlyChartSkeleton() {
  const [numSkeletons, setNumSkeletons] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumSkeletons(5);
      } else {
        setNumSkeletons(10);
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MonthlyChartContainer>
      <MonthlyChartHeader>
        <SkeletonTitle />
        <SkeletonButton />
      </MonthlyChartHeader>

      <SelectGenderButtonWrapper>
        <SkeletonGenderButton />
        <SkeletonGenderButton />
      </SelectGenderButtonWrapper>

      <IdolContainer>
        {Array.from({ length: numSkeletons }).map((_, idx) => (
          <IdolItem key={idx}>
            <IdolCardSkeleton />
          </IdolItem>
        ))}
      </IdolContainer>
    </MonthlyChartContainer>
  );
}

export default MonthlyChartSkeleton;
