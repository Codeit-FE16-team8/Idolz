import { useState } from 'react';
import { contributeDonation, getAllDonations } from '../api/donation';
import Modal from './Modal';
import './testmodal.css';

function DonationModal({ isOpen, onClose, selectedDonation, onDonationSuccess }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = async () => {
    if (!donationAmount) {
      alert('금액을 입력하세요!');
      return;
    }

    const result = await contributeDonation(selectedDonation.id, parseInt(donationAmount, 10));

    if (result) {
      alert('후원 완료');
      setDonationAmount('');
      onClose();

      // 후원 데이터 새로고침
      const updatedDonations = await getAllDonations();
      onDonationSuccess(updatedDonations);
    } else {
      alert('후원 실패');
    }
  };

  const handleClose = () => {
    setDonationAmount('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="donation">
      <div className="modal__donation-header">
        <h3>후원하기</h3>
        <button className="btn--donationModalClose" onClick={handleClose}></button>
      </div>

      <div className="donation_item">
        {/* 프로필 이미지 */}
        <div className="donation__profile">
          <img
            src={selectedDonation?.idol?.profilePicture}
            alt={selectedDonation?.idol?.name}
            className="donation__profile-img"
          />
        </div>
        {/* 후원 설명 */}
        <div className="donation__description">
          <p className="donation__subtitle">{selectedDonation?.subtitle}</p>
          <p className="donation__title">{selectedDonation?.title}</p>
        </div>
      </div>

      {/* 입력 필드 */}
      <div className="donation__input-group">
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="크레딧 입력"
          className="input__credit"
        />
      </div>
      {/* 버튼 */}
      <button className="btn btn--color btn--medium" onClick={handleDonate}>
        후원하기
      </button>
    </Modal>
  );
}

export default DonationModal;
