import { useState } from 'react';
import MonthlyChartIdolFemale from './MonthlyChartIdolFemale';
import MonthlyChartIdolMale from './MonthlyChartIdolMale';

function MonthlyChartIdol() {
  const [ClickIdolGender, setClickIdolGender] = useState('female');

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
        {ClickIdolGender === 'female' && <MonthlyChartIdolFemale />}
        {ClickIdolGender === 'male' && <MonthlyChartIdolMale />}
      </div>
    </div>
  );
}

export default MonthlyChartIdol;
