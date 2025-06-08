import { useEffect, useState } from 'react';

import bong1 from '../assets/cursors/응원봉1.png';
import bong2 from '../assets/cursors/응원봉2.png';
import bong3 from '../assets/cursors/응원봉3.png';

export default function ChangeCursor() {
  const cursorOptions = [
    { name: '응원봉1', url: bong1, hotspotX: 16, hotspotY: 16 },
    { name: '응원봉2', url: bong2, hotspotX: 0, hotspotY: 0 },
    { name: '응원봉3', url: bong3, hotspotX: 10, hotspotY: 10 },
  ];

  // 선택된 커서 상태
  const [selectedCursor, setSelectedCursor] = useState(cursorOptions[0]);

  // 커서 변경 처리
  useEffect(() => {
    document.body.style.cursor = `url(${selectedCursor.url}) ${selectedCursor.hotspotX} ${selectedCursor.hotspotY}, auto`;

    return () => {
      // 언마운트 시 커서 초기화
      document.body.style.cursor = 'auto';
    };
  }, [selectedCursor]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🖱 마우스 포인터 선택</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        {cursorOptions.map((cursor, index) => (
          <div
            key={index}
            onClick={() => setSelectedCursor(cursor)}
            style={{
              border: cursor.url === selectedCursor.url ? '2px solid blue' : '2px solid transparent',
              padding: '10px',
              cursor: 'pointer',
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <img src={cursor.url} alt={cursor.name} width={32} height={32} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>{cursor.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
