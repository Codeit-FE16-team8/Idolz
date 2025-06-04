import IdolVoteChart from './IdolVoteChart';
function MonthlyChartIdolMale({ maleIdols }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {maleIdols.map((idol, index) => (
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

export default MonthlyChartIdolMale;
