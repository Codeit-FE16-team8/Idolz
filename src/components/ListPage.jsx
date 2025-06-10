import { getAllIdols } from '../api/idol';
import { getAllDonations } from '../api/donation';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';
import IdolChart from './IdolChart';
import icon from '../assets/images/Chart.png';
import Button from './Button';
import '../styles/modal.css';

import DonationModal from '../modal/DonationModal';
import NewDonationModal from '../modal/NewDonationModal';
import VoteModal from '../modal/VoteModal';

function ListPage() {
  // ==================================
  // 상태 변수 정의
  // ==================================

  // 후원 리스트 및 아이돌 리스트 상태
  const [donationList, setDonationList] = useState([]);
  const [idolList, setIdolList] = useState([]);

  //데이터 로딩 여부 상태
  const [loading, setLoading] = useState(true);

  //성별 필터 상태 (기본값: female)
  const [selectGender, setSelectGender] = useState('female');

  //이달의 차트에서 표시할 아이돌 개수 제한 (더보기 기능용 / 기본값: 10)
  const [visibleCount, setVisibleCount] = useState(10);

  //후원하기 모달 상태
  const [selectedDonation, setSelectedDonation] = useState(null); // 선택된 후원 항목
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부

  // 새로운 조공 등록 모달 상태
  const [showCreateModal, setShowCreateModal] = useState(false);

  //투표 모달 상태
  const [showVoteModal, setShowVoteModal] = useState(false);

  // ==================================
  // 데이터 불러오기 (후원 + 아이돌)
  // ==================================
  useEffect(() => {
    async function fetchData() {
      try {
        // 후원, 아이돌 데이터 동시에 요청
        const [donationData, idolData] = await Promise.all([getAllDonations(), getAllIdols()]);

        console.log('후원 데이터:', donationData);
        console.log('아이돌 데이터:', idolData);

        setDonationList(donationData);
        setIdolList(idolData);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      } finally {
        setLoading(false); //로딩 종료
      }
    }

    fetchData();
  }, []);

  // ==================================
  // 필터링 및 정렬된 데이터 생성
  // ==================================

  // 선택한 성별에 따른 이달의 차트 (득표순 정렬)
  const filteredIdolList = idolList
    .filter((idol) => idol.gender === selectGender) // 성별 분리
    .sort((a, b) => b.totalVotes - a.totalVotes) // 득표순 정렬
    .slice(0, visibleCount); //차트에 보이는 개수 10개로 제한

  // 후원 리스트를 마감일 기준으로 정렬 (마감일이 가까운 것부터 보이는 것이 나을 것 같다고 생각했습니다.)
  const sortedDonations = donationList
    .slice() // 원본 배열 보호
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  // 후원 모달 열기
  const handleDonateClick = (donation) => {
    setSelectedDonation(donation);
    setShowModal(true);
  };

  // 후원 성공 후 데이터 업데이트
  const handleDonationSuccess = (updatedDonations) => {
    setDonationList(updatedDonations);
  };

  // 새로운 조공 생성 성공 후 데이터 업데이트
  const handleDonationCreated = (updatedDonations) => {
    setDonationList(updatedDonations);
  };

  // 투표 성공 후 데이터 업데이트
  const handleVoteSuccess = (updatedIdols) => {
    setIdolList(updatedIdols);
  };

  // ==================================
  // 렌더링 (UI 영역)
  // ==================================

  // 로딩 또는 데이터 없을 경우 표시 (개발 중 임시용)
  if (loading) return <p>로딩 중...</p>;
  if (donationList.length === 0) return <p>후원 데이터가 없습니다.</p>;

  return (
    <>
      {/* 후원을 기다리는 조공 영역 */}
      <div className="funding">
        <div className="funding-header">
          <h1>후원을 기다리는 조공 </h1>
          <button className="btn btn--color btn--medium" onClick={() => setShowCreateModal(true)}>
            새로운 조공 만들기
          </button>
        </div>
        {/* 후원을 기다리는 조공 슬라이더 영역 */}
        <div className="sliderWrapper">
          <div className="donationContainer">
            {sortedDonations.map((item) => (
              <Item item={item} key={item.id} onDonateClick={() => handleDonateClick(item)} />
            ))}
          </div>
        </div>
      </div>

      {/* 이달의 차트 영역 */}
      <div className="favorite">
        <div className="favorite-header">
          <h1>이달의 차트</h1>

          {/* 투표 버튼 */}
          <Button
            height="medium"
            width="auto"
            icon={icon}
            alt="Chart"
            ariaLabel="차트 투표하기"
            onClick={() => setShowVoteModal(true)}
          >
            차트 투표하기
          </Button>
        </div>

        {/* 성별 필터 버튼 */}
        <div className="buttonContainer">
          <button
            className="btn btn--color btn--medium"
            onClick={() => {
              setSelectGender('female');
              setVisibleCount(10);
            }}
          >
            이달의 여자아이돌
          </button>
          <button
            className="btn btn--color btn--medium"
            onClick={() => {
              setSelectGender('male');
              setVisibleCount(10);
            }}
          >
            이달의 남자아이돌
          </button>
        </div>

        {/* 아이돌 차트 리스트 */}
        <div className="monthlyChartContainer">
          {filteredIdolList?.map((item, index) => (
            <IdolChart item={item} key={item.id} rank={index + 1} />
          ))}
        </div>

        {/* 더보기 버튼 */}
        {filteredIdolList.length < idolList.filter((idol) => idol.gender === selectGender).length && (
          <button className="btn btn--color btn--medium" onClick={() => setVisibleCount((prev) => prev + 10)}>
            더보기
          </button>
        )}
      </div>

      {/* 후원 모달창 임시 구현*/}
      <DonationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedDonation={selectedDonation}
        onDonationSuccess={handleDonationSuccess}
      />
      {/* 새로운 조공 만들기 모달 */}
      <NewDonationModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        idolList={idolList}
        onDonationCreated={handleDonationCreated}
      />
      {/* 투표하기 모달 */}
      <VoteModal
        isOpen={showVoteModal}
        onClose={() => setShowVoteModal(false)}
        idolList={idolList}
        selectGender={selectGender}
        onVoteSuccess={handleVoteSuccess}
      />
    </>
  );
}

export default ListPage;
