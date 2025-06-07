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
  return (
    <MonthlyChartContainer>
      <MonthlyChartHeader>
        <h1>이달의 차트</h1>
        <MonthlyChartVote />
      </MonthlyChartHeader>
      <MonthlyChartIdol idols={idols} />
    </MonthlyChartContainer>
  );
}
export default MonthlyChart;
