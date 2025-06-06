// 아이돌 프로필 컴포넌트
import IdolProfileImage from './IdolProfileImage';
import '../styles/common.css';

function IdolProfile({
  size = '70px',
  profileImg,
  alt,
  idolName,
  idolGroup,
  isSelect = false,
  isDelete = false,
  onClick,
  onDelete,
}) {
  return (
    <div
      onClick={onClick}
      className={`${isDelete ? 'idol__profile--delete' : false} idol__profile`}
      style={{ '--profile-size': size }}
    >
      {isDelete && (
        <button
          className="idol__delete-button"
          onClick={(e) => {
            e.stopPropagation(); // 부모 div 클릭 방지
            onDelete?.(); // 삭제 이벤트 호출
          }}
          aria-label="삭제"
        ></button>
      )}

      <IdolProfileImage size={size} img={profileImg} alt={alt} {...(!isDelete && { isSelect: isSelect })} />
      <div className="idol--name">{idolName}</div>
      <div className="idol--group">{idolGroup}</div>
    </div>
  );
}

export default IdolProfile;
