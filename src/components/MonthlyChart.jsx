import MonthlyChartIdol from './MonthlyChartIdol';
import MonthlyChartVote from './MonthlyChartVote';
import styled from 'styled-components';

const MonthlyChartContainer = styled.div`
  padding: 30px;
`;

const MonthlyChartHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
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
