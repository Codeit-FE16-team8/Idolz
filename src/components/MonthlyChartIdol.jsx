import { useEffect, useState } from 'react';
import MonthlyChartIdolFemale from './MonthlyChartIdolFemale';
import MonthlyChartIdolMale from './MonthlyChartIdolMale';

import styled from 'styled-components';

const SelectGenderButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const GenderButton = styled.button`
  font-size: var(--font-size-base);
  flex: 1;
  height: 42px;
  background-color: ${(props) => (props.active ? 'var(--color-black-181D26)' : 'none')};
  color: ${(props) => (props.active ? 'var(--color-white-F7F7F8)' : 'var(--color-gray-828282)')};
  border-bottom: ${(props) => (props.active ? '1px solid var(--color-white-F7F7F8)' : 'none')};
`;

const MoreIdolsButton = styled.div`
  text-align: center;
  margin-top: 50px;

  button {
    padding: 8px 143px;
    background-color: var(--color-black-181D26);
    border: 1px solid var(--color-gray-67666E);
    border-radius: var(--border-radius-xs);
  }
`;

function MonthlyChartIdol({ idols }) {
  const [ClickIdolGender, setClickIdolGender] = useState('female');
  const [moreIdols, setMoreIdols] = useState(10);
  const [stepSize, setStepSize] = useState(10); // 더보기 시 늘어나는 수

  // 화면 크기에 따라 초기 보여줄 갯수, 증가 수 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMoreIdols(5);
        setStepSize(5);
      } else {
        setMoreIdols(10);
        setStepSize(10);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize); // 창 크기 변화 감지

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = () => {
    setMoreIdols((prev) => prev + stepSize);
  };

  const maleIdols = idols.filter((idol) => idol.gender === 'male');
  const femaleIdols = idols.filter((idol) => idol.gender === 'female');

  const visibleFemaleIdols = femaleIdols.slice(0, moreIdols);
  const visibleMaleIdols = maleIdols.slice(0, moreIdols);

  // 현재 선택된 성별에 따라 전체 아이돌 수 가져오기
  const totalCurrentGenderIdols = ClickIdolGender === 'female' ? femaleIdols.length : maleIdols.length;

  return (
    <div>
      <SelectGenderButtonWrapper>
        <GenderButton active={ClickIdolGender === 'female'} onClick={() => setClickIdolGender('female')}>
          이달의 여자 아이돌
        </GenderButton>
        <GenderButton active={ClickIdolGender === 'male'} onClick={() => setClickIdolGender('male')}>
          이달의 남자 아이돌
        </GenderButton>
      </SelectGenderButtonWrapper>

      <div>
        {ClickIdolGender === 'female' && <MonthlyChartIdolFemale femaleIdols={visibleFemaleIdols} />}
        {ClickIdolGender === 'male' && <MonthlyChartIdolMale maleIdols={visibleMaleIdols} />}
      </div>

      {moreIdols < totalCurrentGenderIdols && (
        <MoreIdolsButton>
          <button onClick={handleLoadMore}>더보기</button>
        </MoreIdolsButton>
      )}
    </div>
  );
}

export default MonthlyChartIdol;
