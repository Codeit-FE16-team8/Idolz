import './item.css';
import IdolProfileImage from './IdolProfileImage';

/**
 * 투표 랭킹에 표시될 개별 아이돌 정보 렌더링하는 컴포넌트
 * @param {object} item - 아이돌 데이터 객체
 * @param {number} rank - 아이돌 인기 순위
 */
function IdolChart({ item, rank }) {
  const idol = item; //아이돌 데이터

  return (
    <div className="idol__chartItems">
      {/* 아이돌 프로필 및 정보 */}
      <div className="idol__chartItem idol__chartItem--flex">
        <IdolProfileImage img={idol.profilePicture} alt={idol.name} />

        {/* 순위 */}
        <div className="idol--order">{rank}</div>

        {/* 그룹명 + 이름 */}
        <div className="idol--name">
          {idol.group} {idol.name}
        </div>

        {/* 누적 투표 수 */}
        <div className="idol--vote">{idol.totalVotes}표</div>
      </div>
    </div>
  );
}

export default IdolChart;
