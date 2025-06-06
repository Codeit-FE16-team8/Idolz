import { useEffect, useRef, useState } from 'react';
import BoxBox from './BoxBox';
import leftImg from '../assets/images/btn_pagination_arrow_left.svg';
import rightImg from '../assets/images/btn_pagination_arrow_right.svg';
import Item from './Item';
import { contributeDonation, getAllDonations, createDonation } from '../api/api';
import './item.css';

import styled from 'styled-components';

const WaitingDonationTitle = styled.h1`
  font-size: 24px;
`;

const ScrollButton = styled.button`
  width: 100px;
  height: 70px;

  gap: 24px;

  img {
    width: 100%;
    height: auto;
  }
`;

function WaitingDonation({ idols }) {
  const idolList = idols;

  const scrollRef = useRef(null);
  const boxWidth = 298; //현재 박스가 150 마진 10

  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  // 후원 리스트 및 아이돌 리스트 상태
  const [donationList, setDonationList] = useState([]);
  //후원하기 모달 상태
  const [selectedDonation, setSelectedDonation] = useState(null); // 선택된 후원 항목
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [donationAmount, setDonationAmount] = useState(''); //입력한 후원 금액

  // 새로운 조공 등록 모달 상태
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newDonation, setNewDonation] = useState({
    title: '',
    subtitle: '',
    deadline: '',
    targetDonation: '',
    idolName: '',
  });

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

  // ==================================
  // 새로운 조공 입력 값 핸들링 함수
  // ==================================
  const handleNewDonationChange = (field, value) => {
    setNewDonation((prev) => ({ ...prev, [field]: value }));
  };

  // 새로운 조공 등록 함수
  const handleCreateDonation = async () => {
    // 입력한 아이돌 이름과 일치하는 아이돌을 데이터에서 찾아 id 확인하는 용도
    const matchedIdol = idolList.find((idol) => idol.name === newDonation.idolName);

    if (!matchedIdol) {
      alert('해당 이름의 아이돌을 찾을 수 없습니다.');
      return;
    }

    // API에 POST할 데이터 구성
    const donationData = {
      title: newDonation.title,
      subtitle: newDonation.subtitle,
      deadline: newDonation.deadline,
      targetDonation: parseInt(newDonation.targetDonation, 10),
      idolId: matchedIdol.id,
    };

    const result = await createDonation(donationData);

    if (result) {
      alert('조공이 등록되었습니다!');
      setShowCreateModal(false); //모달 닫기
      setNewDonation({ title: '', subtitle: '', deadline: '', targetDonation: '', idolName: '' });

      // 조공 리스트 새로고침(등록한 조공 반영)
      const updatedDonations = await getAllDonations();
      setDonationList(updatedDonations);
    } else {
      alert('등록 실패');
    }
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!scrollStart && (
            <ScrollButton onClick={() => scroll('left')}>
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
          {!scrollEnd && (
            <ScrollButton onClick={() => scroll('right')}>
              <img src={rightImg} alt="rightImg" />
            </ScrollButton>
          )}
        </div>
      </div>
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
                  alert('후원 완료');
                  setShowModal(false);
                  setDonationAmount('');
                  // 후원 데이터 새로고침
                  const updatedDonations = await getAllDonations();
                  setDonationList(updatedDonations);
                } else {
                  alert('후원 실패');
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

      {/* 새로운 조공 만들기 모달 */}
      {showCreateModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>새로운 조공 만들기</h2>
            <input
              type="text"
              placeholder="제목"
              value={newDonation.title}
              onChange={(e) => handleNewDonationChange('title', e.target.value)}
            />
            <input
              type="text"
              placeholder="부제"
              value={newDonation.subtitle}
              onChange={(e) => handleNewDonationChange('subtitle', e.target.value)}
            />
            <input
              type="datetime-local"
              placeholder="마감일"
              value={newDonation.deadline}
              onChange={(e) => handleNewDonationChange('deadline', e.target.value)}
            />
            <input
              type="number"
              placeholder="목표 금액"
              value={newDonation.targetDonation}
              onChange={(e) => handleNewDonationChange('targetDonation', e.target.value)}
            />
            <input
              type="text"
              placeholder="아이돌 이름"
              value={newDonation.idolName}
              onChange={(e) => handleNewDonationChange('idolName', e.target.value)}
            />
            <button className="btn" onClick={handleCreateDonation}>
              등록
            </button>
            <button className="btn" onClick={() => setShowCreateModal(false)}>
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default WaitingDonation;
