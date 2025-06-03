import { getAllIdols, getAllDonations } from '../api/api';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';
import IdolChart from './IdolChart';

function ListPage() {
  const [donationList, setDonationList] = useState([]);
  const [idolList, setIdolList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectGender, setSelectGender] = useState('female');
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    async function fetchData() {
      try {
        // 두 API를 동시에 호출
        const [donationData, idolData] = await Promise.all([getAllDonations(), getAllIdols()]);

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
    .filter((idol) => idol.gender === selectGender) //성별 분리
    .sort((a, b) => b.totalVotes - a.totalVotes) // 득표순으로 정렬
    .slice(0, visibleCount); //차트에 보이는 개수 10개로 제한

  const sortedDonations = donationList //마감일이 가까운 순으로 정렬
    .slice() // 원본 배열 변형 방지
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  if (loading) return <p>로딩 중...</p>;
  if (donationList.length === 0) return <p>후원 데이터가 없습니다.</p>;

  return (
    <>
      <div className="funding">
        <h1>펀딩목록</h1>
        <div className="sliderWrapper">
          <div className="donationContainer">
            {sortedDonations.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="favorite">
        <h1>인기차트</h1>
        <button
          className="btn"
          onClick={() => {
            setSelectGender('female');
            setVisibleCount(10);
          }}
        >
          이달의 여자 아이돌
        </button>
        <button
          className="btn"
          onClick={() => {
            setSelectGender('male');
            setVisibleCount(10);
          }}
        >
          이달의 남자 아이돌
        </button>
        <div className="monthlyChartContainer">
          {filteredIdolList?.map((item, index) => (
            <IdolChart item={item} key={item.id} rank={index + 1} />
          ))}
        </div>
        {filteredIdolList.length < idolList.filter((idol) => idol.gender === selectGender).length && (
          <button className="btn" onClick={() => setVisibleCount((prev) => prev + 10)}>
            더보기
          </button>
        )}
      </div>
    </>
  );
}

export default ListPage;
