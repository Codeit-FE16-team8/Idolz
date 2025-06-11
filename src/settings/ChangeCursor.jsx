import bong1 from '../assets/cursors/응원봉1.png';
import bong2 from '../assets/cursors/응원봉2.png';
import bong3 from '../assets/cursors/응원봉3.png';
import bong4 from '../assets/cursors/응원봉4.png';
import bong5 from '../assets/cursors/응원봉5.png';
import { useCursor } from '../components/CursorContext';
import styled from 'styled-components';

const CursorItem = styled.div`
  border: 2px solid transparent;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  min-width: 60px;
  position: relative;

  &.selected {
    border-color: var(--color-orange-F96D69);
  }
`;

const CursorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 10px;
`;

const ResponsiveImg = styled.img`
  width: 100%;
  // width: 48px;
  // height: 64px;

  // @media (max-width: 768px) {
  //   width: 32px;
  //   height: 42px;
  // }

  // @media ((max-width: 480px)) {
  //   width: 16px;
  //   height: 32px;
  // }
`;

const OptionName = styled.div`
  position: absolute;
  bottom: 5px;
  // left: 50%;
  font-size: 14px;
`;

export default function ChangeCursor() {
  const cursorOptions = [
    { name: '응원봉1', url: bong1 },
    { name: '응원봉2', url: bong2 },
    { name: '응원봉3', url: bong3 },
    { name: '응원봉4', url: bong4 },
    { name: '응원봉5', url: bong5 },
  ];

  // 선택된 커서 상태
  const { cursor, setCursor } = useCursor();

  return (
    <div style={{ padding: '20px' }}>
      <h2>마우스 포인터 선택</h2>
      <CursorContainer>
        <CursorItem onClick={() => setCursor(null)} className={cursor === null ? 'selected' : ''}>
          <div style={{ width: 48, height: 64, lineHeight: '64px' }}>기본</div>
          <OptionName>기본 커서</OptionName>
        </CursorItem>
        {cursorOptions.map((option, index) => (
          <CursorItem
            key={index}
            onClick={() => setCursor(option)}
            className={option.url === cursor?.url ? 'selected' : ''}
          >
            <ResponsiveImg src={option.url} alt={option.name} />
            <OptionName>{option.name}</OptionName>
          </CursorItem>
        ))}
      </CursorContainer>
    </div>
  );
}
