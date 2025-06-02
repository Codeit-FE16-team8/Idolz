import { getAllDonations } from '../api/api';
import groupList from '../api/groupList';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';
import IdolChart from './IdolChart';

function ListPage() {
  const [donationList, setDonationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDonationData() {
      try {
        const data = await getAllDonations(groupList);
        console.log('후원 데이터:', data);
        setDonationList(data);
      } catch (error) {
        console.error('후원 데이터 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDonationData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (donationList.length === 0) return <p>후원 데이터가 없습니다.</p>;

  return (
    <>
      <div className="funding">
        <h1>펀딩목록</h1>
        <div className="donationContainer">
          {donationList?.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="favorite">
        <h1>아이돌 인기차트</h1>
        <div className="monthlyChartContainer">
          {donationList?.map((item) => (
            <IdolChart item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListPage;
