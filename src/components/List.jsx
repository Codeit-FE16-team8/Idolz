import WaitingDonation from './WaitingDonation';
import MonthlyChart from './MonthlyChart';
import MyCredit from './MyCredit';

function List() {
  return (
    <div>
      <MyCredit />
      <WaitingDonation />
      <MonthlyChart />
    </div>
  );
}

export default List;
