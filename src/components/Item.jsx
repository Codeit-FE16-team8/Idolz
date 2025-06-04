// 후원을 기다리는 조공의 조공 카드 구현
import Button from './Button';
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

  // 목표 금액 대비 후원 진행률 (최대 100%)
  const progressPercent = Math.min((item.receivedDonations / item.targetDonation) * 100, 100);

  return (
    <div className="idol__sponsor">
      <div className="sponsor__imgBtn">
        {/* 아이돌 프로필 이미지 */}
        <div className="sponsor__img">
          <img src={idol.profilePicture} alt={idol.name} />
        </div>
        {/* 후원하기 버튼 */}
        <Button width="90%" ariaLabel="후원하기" onClick={onDonateClick}>
          후원하기
        </Button>
      </div>

      {/* 조공 설명 */}
      <div className="sponsor__Info">
        <p className="sponsor__subTitle">{item.subtitle}</p>
        <h2 className="sponsor__title">{item.title} </h2>
      </div>

      {/* 후원 현황 */}
      <div className="sponsor__status">
        <span className="sponsor__credit">{item.receivedDonations}</span>
        <span className="sponsor__days">{getRemainingDays(item.deadline)}일 남음</span>
      </div>

      {/* 후원 진행 바 */}
      <div className="sponsor__bar" style={{ '--barPer': `${progressPercent}%` }}></div>
    </div>
  );
}

export default Item;
