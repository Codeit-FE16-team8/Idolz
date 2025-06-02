import './item.css';

function IdolChart({ item }) {
  const idol = item.idol;

  return (
    <div className="idolChart">
      <div className="idolProfile">
        <img src={idol.profilePicture} alt={idol.name} className="idolProfileImage" />
        <p>number</p>
        <p>
          {idol.group} {idol.name}
        </p>
      </div>
      <p>{idol.totalVotes}표</p>
    </div>
  );
}

export default IdolChart;
