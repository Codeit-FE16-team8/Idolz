import IdolVoteChart from './IdolVoteChart';

function MonthlyChartIdolFemale({ femaleIdols }) {
  console.log(femaleIdols);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {femaleIdols.map((idol, index) => (
        <div style={{ width: '50%' }}>
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
