import Modal from './Modal';
import '../styles/modal.css';

function InsufficientCreditModal({ isOpen, onClose, message }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="credit-lack">
      <button className="btn--donationModalClose" onClick={onClose}></button>
      <div className="credit-lack__container">
        <img src="" alt="크레딧 부족" />
        <p>
          앗! {message} 위한 <span className="highlight">크레딧</span>이 부족해요
        </p>
        <button className="btn btn--large" onClick={onClose}>
          확인
        </button>
      </div>
    </Modal>
  );
}

export default InsufficientCreditModal;
