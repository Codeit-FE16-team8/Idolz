import IdolVoteChart from './IdolVoteChart';

function MonthlyChartIdolFemale({ femaleIdols }) {
  console.log(femaleIdols);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {femaleIdols.map((idol, index) => (
        // 짝수 index에만 적용
        <div key={idol.id} style={{ width: '49%', marginRight: index % 2 === 0 ? '2%' : '0' }}>
          <IdolVoteChart
            key={idol.id}
            profileImg={idol.profilePicture}
            alt={idol.name}
            idx={index + 1}
            name={idol.name}
            vote={idol.totalVotes}
          />
        </div>
      ))}
    </div>
  );
}

export default MonthlyChartIdolFemale;
