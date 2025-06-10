import bong1 from '../assets/cursors/응원봉1.png';
import bong2 from '../assets/cursors/응원봉2.png';
import bong3 from '../assets/cursors/응원봉3.png';
import bong4 from '../assets/cursors/응원봉4.png';
import bong5 from '../assets/cursors/응원봉5.png';
import { useCursor } from './CursorContext';

export default function ChangeCursor() {
  const cursorOptions = [
    { name: '응원봉1', url: bong1 },
    { name: '응원봉2', url: bong2 },
    { name: '응원봉3', url: bong3 },
    { name: '응원봉4', url: bong4 },
    { name: '응원봉4', url: bong5 },
  ];

  // 선택된 커서 상태
  const { cursor, setCursor } = useCursor();

  return (
    <div style={{ padding: '20px' }}>
      <h2>마우스 포인터 선택</h2>
      <div style={{ display: 'flex', gap: '30px', marginTop: '10px' }}>
        <div
          onClick={() => setCursor(null)}
          style={{
            border: cursor === null ? '2px solid var(--color-orange-F96D69)' : '2px solid transparent',
            padding: '10px',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          <div style={{ width: 48, height: 64, lineHeight: '64px' }}>기본</div>
          <div style={{ marginTop: '5px', fontSize: '14px' }}>기본 커서</div>
        </div>
        {cursorOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => setCursor(option)}
            style={{
              border: option.url === cursor?.url ? '2px solid var(--color-orange-F96D69)' : '2px solid transparent',
              padding: '10px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            <img src={option.url} alt={option.name} width={48} height={64} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
