// 마이 페이지 페이지네이션 컴포넌트
import LeftIcon from '../assets/images/btn_pagination_arrow_left.svg';
import RightIcon from '../assets/images/btn_pagination_arrow_right.svg';
import '../styles/Btn_Pagination.css';
function BtnPagination({ onClick, direction, disabled }) {
  const icon = direction === 'left' ? LeftIcon : RightIcon;

  return (
    <button onClick={onClick} disabled={disabled} className={`btn-pagination ${disabled ? 'disabled' : ''}`}>
      <img src={icon} alt={`${direction} arrow`} className="btn-pagination__icon" />
    </button>
  );
}

export default BtnPagination;
