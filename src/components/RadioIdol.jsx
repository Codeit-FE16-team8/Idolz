import IdolProfileImage from './IdolProfileImage';

function RadioIdol({ id, groupName, profileImg, alt, idx, name, vote, isChecked = false }) {
  return (
    <div className="radio radio__idol">
      <input type="radio" name={groupName} id={id} defaultChecked={isChecked} />
      <label htmlFor={id} className="radio__idol--flex">
        <IdolProfileImage className="radio__idol--img" img={profileImg} alt={alt} />
        <div className="idol--order">{idx}</div>
        <span>
          <div className="idol--name">{name}</div>
          <div className="idol--vote">{vote.toLocaleString()}표</div>
        </span>
        <span className="radio-icon"></span>
      </label>
    </div>
  );
}
export default RadioIdol;
