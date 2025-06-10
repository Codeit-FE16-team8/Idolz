import { useState } from 'react';
import { contributeDonation, getAllDonations } from '../api/donation';
import Modal from './Modal';

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
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2>{selectedDonation?.title} 후원하기</h2>
      <input
        type="number"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        placeholder="후원 금액 입력"
      />
      <button className="btn" onClick={handleDonate}>
        기여하기
      </button>
      <button className="btn" onClick={handleClose}>
        취소
      </button>
    </Modal>
  );
}

export default DonationModal;
