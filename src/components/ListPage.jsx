import { getAllIdols, getAllDonations, contributeDonation } from '../api/api';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';
import IdolChart from './IdolChart';

function ListPage() {
  const [donationList, setDonationList] = useState([]);
  const [idolList, setIdolList] = useState([]);
  const [loading, setLoading] = useState(true);

  //성별 선택 버튼
  const [selectGender, setSelectGender] = useState('female');

  //이달의 차트 더보기 버튼
  const [visibleCount, setVisibleCount] = useState(10);

  //후원하기 버튼 활성화 테스트를 위한 임시 모달창 구현
  const [selectedDonation, setSelectedDonation] = useState(null); // 선택된 후원
  const [showModal, setShowModal] = useState(false); // 모달 열림/닫힘
  const [donationAmount, setDonationAmount] = useState('');

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
              <Item
                item={item}
                key={item.id}
                // 후원하기 모달창 임시 구현
                onDonateClick={() => {
                  setSelectedDonation(item);
                  setShowModal(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="favorite">
        <h1>인기차트</h1>
        <div className="buttonContainer">
          <button
            className="btn"
            onClick={() => {
              setSelectGender('female');
              setVisibleCount(10);
            }}
          >
            이달의 여자아이돌
          </button>
          <button
            className="btn"
            onClick={() => {
              setSelectGender('male');
              setVisibleCount(10);
            }}
          >
            이달의 남자아이돌
          </button>
        </div>
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
      {/* 💡 여기에 모달을 조건부로 렌더링 */}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>{selectedDonation?.title} 후원하기</h2>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="후원 금액 입력"
            />
            <button
              className="btn"
              onClick={async () => {
                if (!donationAmount) {
                  alert('금액을 입력하세요!');
                  return;
                }

                const result = await contributeDonation(selectedDonation.id, parseInt(donationAmount, 10));

                if (result) {
                  alert('후원 기여가 완료되었습니다!');
                  setShowModal(false);
                  setDonationAmount('');
                  // 후원 데이터 새로고침
                  const updatedDonations = await getAllDonations();
                  setDonationList(updatedDonations);
                } else {
                  alert('후원 기여에 실패했습니다.');
                }
              }}
            >
              기여하기
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ListPage;
