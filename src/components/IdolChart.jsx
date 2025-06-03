import './item.css';

function IdolChart({ item, rank }) {
  const idol = item;

  return (
    <div className="idolChart">
      <div className="idolProfile">
        <img src={idol.profilePicture} alt={idol.name} className="idolProfileImage" />
        <p>{rank}</p>
        <p>
          {idol.group} {idol.name}
        </p>
      </div>
      <p>{idol.totalVotes}표</p>
    </div>
  );
}

export default IdolChart;
