import { useRef } from 'react';
import BoxBox from './BoxBox';
import MonthlyChart from './MonthlyChart';

function List() {
  const scrollRef = useRef(null);
  const boxWidth = 160; //현재 박스가 150 마진 10

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -boxWidth : boxWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      <div>dev 공간</div>
      <div>내크레딧</div>
      <h2>후원을 기다리는 조공</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => scroll('left')}>←</button>
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            width: `${boxWidth * 4}px`,
            padding: '10px',
            scrollbarWidth: 'none',
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <BoxBox key={i} number={i + 1} />
          ))}
        </div>
        <button onClick={() => scroll('right')}>→</button>
      </div>
      <MonthlyChart />
    </div>
  );
}

export default List;
