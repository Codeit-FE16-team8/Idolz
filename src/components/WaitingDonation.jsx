import { useEffect, useRef, useState } from 'react';
import BoxBox from './BoxBox';
import leftImg from '../assets/images/btn_pagination_arrow_left.svg';
import rightImg from '../assets/images/btn_pagination_arrow_right.svg';
import Item from './Item';
import { getAllDonations } from '../api/donation';
import './item.css';
import DonationModal from '../modal/DonationModal';
import NewDonationModal from '../modal/NewDonationModal';

import styled from 'styled-components';

const Funding = styled.div`
  padding: 30px;
`;
const WaitingDonationTitle = styled.h1`
  font-size: 24px;
`;

const ScrollButton = styled.button`
  width: 40px;
  height: 50px;
  position: absolute;

  ${(props) => (props.left ? 'left:-75px;' : 'right:-75px;')}

  gap: 24px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function WaitingDonation({ idols }) {
  const idolList = idols;

  const scrollRef = useRef(null);
  const boxWidth = 298;
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  // 후원 리스트 및 아이돌 리스트 상태
  const [donationList, setDonationList] = useState([]);

  //후원하기 모달 상태
  const [selectedDonation, setSelectedDonation] = useState(null); // 선택된 후원 항목
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부

  // 새로운 조공 등록 모달 상태
  const [showCreateModal, setShowCreateModal] = useState(false);

  //스크롤바
  const ScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setScrollStart(scrollLeft === 0);
    setScrollEnd(scrollLeft + clientWidth >= scrollWidth - 1); //-1로 오차 허용
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -boxWidth : boxWidth;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    console.log('scrollLeft:', container.scrollLeft); //전체 가로
    console.log('clientWidth:', container.clientWidth); //화면상 가로
    console.log('scrollWidth:', container.scrollWidth); //현재 스크롤 된 거리
  };
  //

  // 후원 리스트를 마감일 기준으로 정렬 (마감일이 가까운 것부터 보이는 것이 나을 것 같다고 생각했습니다.)
  const sortedDonations = donationList
    .slice() // 원본 배열 보호
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  useEffect(() => {
    async function fetchData() {
      const donationData = await getAllDonations();
      setDonationList(donationData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    ScrollPosition();
  }, [donationList]);

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

  return (
    <>
      <div className="funding">
        <div className="funding-header">
          <WaitingDonationTitle>후원을 기다리는 조공 </WaitingDonationTitle>
          <button className="btn btn--color btn--medium" onClick={() => setShowCreateModal(true)}>
            새로운 조공 만들기
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          {!scrollStart && (
            <ScrollButton left onClick={() => scroll('left')}>
              <img src={leftImg} alt="leftImg" />
            </ScrollButton>
          )}
          <div className="sliderWrapper">
            <div
              className="donationContainer"
              ref={scrollRef}
              onScroll={ScrollPosition}
              style={{
                overflowX: 'auto',
                scrollbarWidth: 'none',
              }}
            >
              {sortedDonations.map((item) => (
                <Item item={item} key={item.id} onDonateClick={() => handleDonateClick(item)} />
              ))}
            </div>
          </div>
          {!scrollEnd && (
            <ScrollButton onClick={() => scroll('right')}>
              <img src={rightImg} alt="rightImg" />
            </ScrollButton>
          )}
        </div>
      </div>

      {/* 후원 모달창 */}
      <DonationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedDonation={selectedDonation}
        onDonationSuccess={handleDonationSuccess}
      />
      {/* 새로운 조공 만들기 모달창 */}
      <NewDonationModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        idolList={idolList}
        onDonationCreated={handleDonationCreated}
      />
    </>
  );
}

export default WaitingDonation;
