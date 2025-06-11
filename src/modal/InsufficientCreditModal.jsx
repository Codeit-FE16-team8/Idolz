import Modal from './Modal';
import Button from '../components/Button';
import credit from '../assets/images/credit_113px.png';
import '../styles/modal.css';

function InsufficientCreditModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="credit-lack">
      <div className="modal__credit-container">
        <button className="btn--donationModalClose" onClick={onClose}></button>
      </div>
      <div className="credit-lack__container">
        <img src={credit} alt="크레딧 부족" />
        <p>
          앗! 투표하기 위한 <span className="highlight">크레딧</span>이 부족해요
        </p>
        <Button height="large" ariaLabel="확인" onClick={onClose}>
          확인
        </Button>
      </div>
    </Modal>
  );
}

export default InsufficientCreditModal;
