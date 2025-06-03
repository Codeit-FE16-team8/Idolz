import './item.css';
import '../styles/common.css';

function Item({ item, onDonateClick }) {
  const idol = item.idol;

  //마감일 숫자로 변환
  function getRemainingDays(dateStr) {
    const now = new Date();
    const deadline = new Date(dateStr);
    return Math.max(Math.ceil((deadline - now) / (1000 * 60 * 60 * 24)), 0);
  }

  return (
    <div className="idolCard">
      <img src={idol.profilePicture} alt={idol.name} className="idolProfileImage" />
      <button className="btn--large" onClick={onDonateClick}>
        후원하기
      </button>
      <div className="donationScript">
        <p>{item.subtitle}</p>
        <h2>{item.title} </h2>
      </div>
      <div className="donationStatus">
        <p>{item.receivedDonations}</p>
        <p>{getRemainingDays(item.deadline)}일 남음</p>
      </div>
    </div>
  );
}

export default Item;
