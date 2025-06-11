import { useState } from 'react';
import { contributeDonation, getAllDonations } from '../api/donation';
import Modal from './Modal';
import '../styles/modal.css';
import Button from '../components/Button';

function DonationModal({ isOpen, onClose, selectedDonation, onDonationSuccess, creditAmount, onDonation }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = async () => {
    if (!donationAmount) {
      alert('금액을 입력하세요!');
      return;
    }

    const amount = parseInt(donationAmount, 10);

    // 크레딧 부족 체크
    if (amount > creditAmount) {
      setDonationAmount('');
      return;
    }

    const result = await contributeDonation(selectedDonation.id, parseInt(donationAmount, 10));

    if (result) {
      const success = onDonation(amount);

      if (success) {
        alert(`${amount.toLocaleString()} 크레딧으로 후원 완료!`);
        setDonationAmount('');
        onClose();

        // 후원 데이터 새로고침
        const updatedDonations = await getAllDonations();
        onDonationSuccess(updatedDonations);
      } else {
        alert('크레딧 차감 실패');
      }
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
          style={{ border: donationAmount > creditAmount ? 'solid 1px #FF2626' : '' }}
        />
        {donationAmount > creditAmount && <p>갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>}
      </div>
      {/* 버튼 */}
      <Button
        height="large"
        ariaLabel="후원하기"
        onClick={handleDonate}
        isDisabled={
          !donationAmount || // 입력값이 없거나
          donationAmount <= 0 || // 0 이하거나
          parseInt(donationAmount, 10) > creditAmount
        }
      >
        후원하기
      </Button>
    </Modal>
  );
}

export default DonationModal;
