import IdolVoteChart from './IdolVoteChart';
import styled from 'styled-components';

const IdolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;
const IdolItem = styled.div`
  width: 49%;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;
function MonthlyChartIdolMale({ maleIdols }) {
  return (
    <IdolContainer>
      {maleIdols.map((idol, index) => (
        <IdolItem key={idol.id}>
          <IdolVoteChart
            key={idol.id}
            profileImg={idol.profilePicture}
            alt={idol.name}
            idx={index + 1}
            name={idol.name}
            vote={idol.totalVotes}
          />
        </IdolItem>
      ))}
    </IdolContainer>
  );
}

export default MonthlyChartIdolMale;
