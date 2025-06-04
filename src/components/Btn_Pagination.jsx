// 마이 페이지 좌우 넘기기 컴포넌트
import LeftIcon from './assets/images/btn_Pagination_arrow_left.svg';
import RightIcon from './assets/images/btn_Pagination_arrow_right.svg';

function BtnPagination({ onClick, direction, disabled }) {
  const icon = direction === 'left' ? LeftIcon : RightIcon;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: 'none',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.3 : 1,
        padding: '4px',
      }}
    >
      <img src={icon} alt={`${direction} arrow`} style={{ width: '24px', height: '24px' }} />
    </button>
  );
}

export default BtnPagination;
