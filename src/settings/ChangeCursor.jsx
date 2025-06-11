import bong1 from '../assets/cursors/aespa.png';
import bong2 from '../assets/cursors/andteam.png';
import bong3 from '../assets/cursors/blackpink.png';
import bong4 from '../assets/cursors/boynextdoor.png';
import bong5 from '../assets/cursors/daysix.png';
import bong6 from '../assets/cursors/enhypen.png';
import bong7 from '../assets/cursors/i-dle.png';
import bong8 from '../assets/cursors/illit.png';
import bong9 from '../assets/cursors/ive.png';
import bong10 from '../assets/cursors/kiki.png';
import bong11 from '../assets/cursors/kissoflife.png';
import bong12 from '../assets/cursors/lesserafim.png';
import bong13 from '../assets/cursors/nctwish.png';
import bong14 from '../assets/cursors/newjeans.png';
import bong15 from '../assets/cursors/riize.png';
import bong16 from '../assets/cursors/seventeen.png';

import { useCursor } from '../components/CursorContext';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;
  padding: 0 10px;

  border: 2px solid white;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const CursorItem = styled.div`
  flex: 0 0 10%; // 기본 PC: 10개
  max-width: 10%;
  min-width: 60px;
  border: 2px solid transparent;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  position: relative;

  &.selected {
    border-color: var(--color-orange-F96D69);
  }

  @media (max-width: 768px) {
    flex: 0 0 20%; // 태블릿: 5개
    max-width: 20%;
  }

  @media (max-width: 480px) {
    flex: 0 0 33.33%; // 모바일: 3개
    max-width: 33.33%;
  }
`;

const CursorContainer = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-orange-F96D69);
    border-radius: 4px;
  }
`;

const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 64px;
`;

const OptionName = styled.div`
  bottom: 5px;
  font-size: 12px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export default function ChangeCursor() {
  const cursorOptions = [
    { name: '에스파', url: bong1 },
    { name: '앤팀', url: bong2 },
    { name: '블랙핑크', url: bong3 },
    { name: '보이넥스트도어', url: bong4 },
    { name: '데이식스', url: bong5 },
    { name: '엔하이픈', url: bong6 },
    { name: '아이들', url: bong7 },
    { name: '아일릿', url: bong8 },
    { name: '아이브', url: bong9 },
    { name: '키키', url: bong10 },
    { name: '키스오브라이프', url: bong11 },
    { name: '르세라핌', url: bong12 },
    { name: '엔시티위시', url: bong13 },
    { name: '뉴진스', url: bong14 },
    { name: '라이즈', url: bong15 },
    { name: '세븐틴', url: bong16 },
  ];

  // 선택된 커서 상태
  const { cursor, setCursor } = useCursor();

  return (
    <Container>
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
    </Container>
  );
}
