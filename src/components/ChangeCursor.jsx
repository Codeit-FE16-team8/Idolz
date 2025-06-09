import { useEffect, useState } from 'react';

import bong1 from '../assets/cursors/응원봉1.png';
import bong2 from '../assets/cursors/응원봉2.png';
import bong3 from '../assets/cursors/응원봉4.png';

export default function ChangeCursor() {
  const cursorOptions = [
    { name: '응원봉1', url: bong1 },
    { name: '응원봉2', url: bong2 },
    { name: '응원봉3', url: bong3 },
  ];

  // 선택된 커서 상태
  const [selectedCursor, setSelectedCursor] = useState(cursorOptions[0]);

  // 커서 변경 처리
  useEffect(() => {
    document.body.style.cursor = `url(${selectedCursor.url}), auto`;
  }, [selectedCursor]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>마우스 포인터 선택</h2>
      <div style={{ display: 'flex', gap: '30px', marginTop: '10px' }}>
        {cursorOptions.map((cursor, index) => (
          <div
            key={index}
            onClick={() => setSelectedCursor(cursor)}
            style={{
              border: cursor.url === selectedCursor.url ? '2px solid blue' : '2px solid transparent',
              padding: '10px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            <img src={cursor.url} alt={cursor.name} width={48} height={64} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>{cursor.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
