import MonthlyChartIdol from './MonthlyChartIdol';
import MonthlyChartVote from './MonthlyChartVote';

function MonthlyChart({ idols }) {
  return (
    <div>
      <h2>이달의 차트</h2>
      <MonthlyChartVote />
      <MonthlyChartIdol idols={idols} />
    </div>
  );
}
export default MonthlyChart;
