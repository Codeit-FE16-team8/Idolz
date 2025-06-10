import { useState } from 'react';
import MonthlyChartIdol from './MonthlyChartIdol';
import MonthlyChartVote from './MonthlyChartVote';
import styled from 'styled-components';

const MonthlyChartContainer = styled.div`
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const MonthlyChartHeader = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

function MonthlyChart({ idols }) {
  // 선택된 성별 상태를 상위 컴포넌트에서 관리
  const [selectedGender, setSelectedGender] = useState('female');

  // 투표 성공 후 아이돌 데이터 업데이트 처리
  const handleVoteSuccess = (updatedIdols) => {
    // 여기서 상위 컴포넌트로 업데이트된 데이터를 전달하거나
    // 필요한 후속 처리를 수행할 수 있습니다
    console.log('투표 성공, 데이터 업데이트:', updatedIdols);
  };

  return (
    <MonthlyChartContainer>
      <MonthlyChartHeader>
        <h1>이달의 차트</h1>
        <MonthlyChartVote idolList={idols} selectGender={selectedGender} onVoteSuccess={handleVoteSuccess} />
      </MonthlyChartHeader>
      <MonthlyChartIdol idols={idols} selectedGender={selectedGender} onGenderChange={setSelectedGender} />
    </MonthlyChartContainer>
  );
}
export default MonthlyChart;
