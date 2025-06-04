import { useState } from 'react';
import MonthlyChartIdolFemale from './MonthlyChartIdolFemale';
import MonthlyChartIdolMale from './MonthlyChartIdolMale';

function MonthlyChartIdol({ idols }) {
  const [ClickIdolGender, setClickIdolGender] = useState('female');
  const [moreIdols, setMoreIdols] = useState(10); //더보기 초기에 10개

  const handleLoadMore = () => {
    setMoreIdols((prev) => prev + 10); //10개추가
  };

  const maleIdols = idols.filter((idol) => idol.gender === 'male');
  const femaleIdols = idols.filter((idol) => idol.gender === 'female');

  const visibleFemaleIdols = femaleIdols.slice(0, moreIdols);
  const visibleMaleIdols = maleIdols.slice(0, moreIdols);
  return (
    <div>
      <button
        onClick={() => setClickIdolGender('female')}
        style={{
          border: ClickIdolGender === 'female' ? '1px solid red' : '1px solid white',
        }}
      >
        이달의 여자 아이돌
      </button>
      <button
        onClick={() => setClickIdolGender('male')}
        style={{
          border: ClickIdolGender === 'male' ? '1px solid red' : '1px solid white',
        }}
      >
        이달의 남자 아이돌
      </button>

      <div>
        {ClickIdolGender === 'female' && <MonthlyChartIdolFemale femaleIdols={visibleFemaleIdols} />}
        {ClickIdolGender === 'male' && <MonthlyChartIdolMale maleIdols={visibleMaleIdols} />}
      </div>
      {/* 아이돌 남을시 버튼 표시 */}
      {moreIdols < femaleIdols.length && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={handleLoadMore}>더보기</button>
        </div>
      )}
    </div>
  );
}

export default MonthlyChartIdol;
