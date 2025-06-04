import './item.css';

/**
 * 투표 랭킹에 표시될 개별 아이돌 정보 렌더링하는 컴포넌트
 * @param {object} item - 아이돌 데이터 객체
 * @param {number} rank - 아이돌 인기 순위
 */
function IdolChart({ item, rank }) {
  const idol = item; //아이돌 데이터

  return (
    <div className="idolChart">
      {/* 아이돌 프로필 및 정보 */}
      <div className="idolProfile">
        <img src={idol.profilePicture} alt={idol.name} className="idolProfileImage" />

        {/* 순위 */}
        <p>{rank}</p>

        {/* 그룹명 + 이름 */}
        <p>
          {idol.group} {idol.name}
        </p>
      </div>

      {/* 누적 투표 수 */}
      <p>{idol.totalVotes}표</p>
    </div>
  );
}

export default IdolChart;
