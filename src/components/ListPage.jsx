import { getAllIdols, getAllDonations } from '../api/api';
import groupList from '../api/groupList';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';
import IdolChart from './IdolChart';
import postAll from '../api/postInitData';

function ListPage() {
  const [donationList, setDonationList] = useState([]);
  const [idolList, setIdolList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectGender, setSelectGender] = useState('female');

  useEffect(() => {
    if (!localStorage.getItem('initialized')) {
      postAll();
      localStorage.setItem('initialized', 'true');
    }

    async function fetchData() {
      try {
        // 두 API를 동시에 호출
        const [donationData, idolData] = await Promise.all([getAllDonations(groupList), getAllIdols(groupList)]);

        console.log('후원 데이터:', donationData);
        console.log('아이돌 데이터:', idolData);

        setDonationList(donationData);
        setIdolList(idolData);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  const filteredIdolList = idolList
    .filter((idol) => idol.gender === selectGender)
    .sort((a, b) => b.totalVotes - a.totalVotes); // 내림차순 정렬

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
        <h1>인기차트</h1>
        <button className="btn" onClick={() => setSelectGender('female')}>
          이달의 여자 아이돌
        </button>
        <button className="btn" onClick={() => setSelectGender('male')}>
          이달의 남자 아이돌
        </button>
        <div className="monthlyChartContainer">
          {filteredIdolList?.map((item, index) => (
            <IdolChart item={item} key={item.id} rank={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListPage;
