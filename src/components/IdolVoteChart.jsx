import IdolProfileImage from './IdolProfileImage';

function IdolVoteChart({ profileImg, alt, idx, name, vote }) {
  return (
    <div className="idol__chartItems">
      <div className="idol__chartItem idol__chartItem--flex ">
        <IdolProfileImage img={profileImg} alt={alt} />
        <div className="idol--order">{idx}</div>
        <div className="idol--name">{name}</div>
        <div className="idol--vote">{vote.toLocaleString()}표</div>
      </div>
    </div>
  );
}

export default IdolVoteChart;
