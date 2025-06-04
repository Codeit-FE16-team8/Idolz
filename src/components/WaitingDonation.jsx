import { useEffect, useRef, useState } from 'react';
import BoxBox from './BoxBox';
import leftImg from '../assets/images/btn_pagination_arrow_left.svg';
import rightImg from '../assets/images/btn_pagination_arrow_right.svg';

function WaitingDonation() {
  const scrollRef = useRef(null);
  const boxWidth = 160; //현재 박스가 150 마진 10

  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

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

  useEffect(() => {
    ScrollPosition();
  }, []);

  return (
    <div>
      <h2>후원을 기다리는 조공</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!scrollStart && (
          <button onClick={() => scroll('left')}>
            <img src={leftImg} alt="leftImg" />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={ScrollPosition}
          style={{
            display: 'flex',
            overflowX: 'auto',
            width: `${boxWidth * 4}px`,
            padding: '10px',
            scrollbarWidth: 'none',
          }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <BoxBox key={i} number={i + 1} />
          ))}
        </div>
        {!scrollEnd && (
          <button onClick={() => scroll('right')}>
            <img src={rightImg} alt="rightImg" />
          </button>
        )}
      </div>
    </div>
  );
}

export default WaitingDonation;
