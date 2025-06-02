import { getAllDonations } from '../api/api';
import groupList from '../api/groupList';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';

function CardDonation() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDonationData() {
      try {
        const data = await getAllDonations(groupList);
        console.log('후원 데이터:', data);
        setItemList(data);
      } catch (error) {
        console.error('후원 데이터 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDonationData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (itemList.length === 0) return <p>후원 데이터가 없습니다.</p>;

  return (
    <div className="donationContainer">
      {itemList?.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CardDonation;
