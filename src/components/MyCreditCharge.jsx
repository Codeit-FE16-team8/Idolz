import { useState } from 'react';
import CREDIT_IMG from '../assets/images/credit_white.png';
import Button from './Button';
import RadioCredit from './RadioCredit';

function MyCreditCharge({ onCharge }) {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('100');

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCharge = () => {
    const amount = parseInt(selected, 10);
    onCharge(amount);
    alert(`${amount.toLocaleString()} 크레딧을 충전했습니다.`);
    handleClose();
  };

  return (
    <div>
      {/* 모달 밖 충전하기 버튼 */}
      <button className="btn btn-creditcharge" onClick={handleOpen}>
        충전하기
      </button>

      {showModal && (
        <div className="modalOverlay" onClick={handleClose}>
          <div className="modalContent creditCharge" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, color: 'white' }}>크레딧 충전</h2>

            <RadioCredit id="RadioCredit1" groupName="RadioCredit" onSelect={setSelected} selected={selected}>
              100
            </RadioCredit>
            <RadioCredit id="RadioCredit2" groupName="RadioCredit" onSelect={setSelected} selected={selected}>
              500
            </RadioCredit>
            <RadioCredit id="RadioCredit3" groupName="RadioCredit" onSelect={setSelected} selected={selected}>
              1000
            </RadioCredit>
            <Button height="large" ariaLabel="충전하기" icon={CREDIT_IMG} alt="크레딧 아이콘" onClick={handleCharge}>
              충전하기
            </Button>
            <button className="btn--modalClose" onClick={handleClose}></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCreditCharge;
