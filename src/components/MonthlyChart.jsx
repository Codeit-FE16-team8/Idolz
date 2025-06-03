import MonthlyChartIdol from './MonthlyChartIdol';
import MonthlyChartVote from './MonthlyChartVote';

function MonthlyChart() {
  return (
    <div>
      <h2>이달의 차트</h2>
      <MonthlyChartVote />
      <MonthlyChartIdol />
    </div>
  );
}
export default MonthlyChart;
