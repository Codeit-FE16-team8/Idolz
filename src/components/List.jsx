import WaitingDonation from './WaitingDonation';
import MonthlyChart from './MonthlyChart';
import MyCredit from './MyCredit';
import { getAllIdols } from '../api/api';
import { useEffect, useState } from 'react';

function List() {
  const [idols, setIdols] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function IdolsData() {
      const data = await getAllIdols();
      setIdols(data);
      setLoading(false);
    }

    IdolsData();
  }, []);

  if (loading) return <p>로딩중</p>;

  return (
    <div>
      <MyCredit />
      <WaitingDonation />
      <MonthlyChart idols={idols} />
    </div>
  );
}

export default List;
