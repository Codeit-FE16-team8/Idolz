import Button from './Button';
import icon from '../assets/images/Chart.png';

function MonthlyChartVote() {
  return (
    <div>
      <Button height="medium" width="auto" icon={icon} alt="Chart" ariaLabel="차트 투표하기">
        차트 투표하기
      </Button>
    </div>
  );
}

export default MonthlyChartVote;
