import './item.css';
import '../styles/common.css';

/**
 *
 * @param {object} item - 조공 데이터
 * @param {function} onDonateClick - '후원하기' 버튼 클릭시 실행할 함수
 */
function Item({ item, onDonateClick }) {
  const idol = item.idol; // 해당 조공이 속한 아이돌 정보

  /**
   * 마감일까지 남은 일 수를 계산하는 함수
   * @param {string} dateStr - 마감일 (YYYY-MM-DD 형식)
   * @returns {number} - 오늘 기준 남은 일 수 (최소 0일)
   */
  function getRemainingDays(dateStr) {
    const now = new Date(); //현재 시간
    const deadline = new Date(dateStr); //마감일
    return Math.max(Math.ceil((deadline - now) / (1000 * 60 * 60 * 24)), 0); //일 수 계산 (음수 방지)
  }

  return (
    <div className="idolCard">
      {/* 아이돌 프로필 이미지 */}
      <img src={idol.profilePicture} alt={idol.name} className="idolProfileImage" />

      {/* 후원하기 버튼 */}
      <button className="btn--large" onClick={onDonateClick}>
        후원하기
      </button>

      {/* 조공 설명 */}
      <div className="donationScript">
        <p>{item.subtitle}</p>
        <h2>{item.title} </h2>
      </div>

      {/* 후원 현황 */}
      <div className="donationStatus">
        <p>{item.receivedDonations}</p>
        <p>{getRemainingDays(item.deadline)}일 남음</p>
      </div>
    </div>
  );
}

export default Item;
