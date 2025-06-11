import { useState } from 'react';
import { createDonation, getAllDonations } from '../api/donation';
import Modal from './Modal';
import '../styles/modal.css';
import Button from '../components/Button';

function NewDonationModal({ isOpen, onClose, idolList, onDonationCreated }) {
  const [newDonation, setNewDonation] = useState({
    title: '',
    subtitle: '',
    deadline: '',
    targetDonation: '',
    idolName: '',
  });

  const handleInputChange = (field, value) => {
    setNewDonation((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateDonation = async () => {
    // 입력한 아이돌 이름과 일치하는 아이돌을 데이터에서 찾아 id 확인
    const matchedIdol = idolList.find((idol) => idol.name === newDonation.idolName);

    if (!matchedIdol) {
      alert('해당 이름의 아이돌을 찾을 수 없습니다.');
      return;
    }

    // API에 POST할 데이터 구성
    const donationData = {
      title: newDonation.title,
      subtitle: newDonation.subtitle,
      deadline: newDonation.deadline,
      targetDonation: parseInt(newDonation.targetDonation, 10),
      idolId: matchedIdol.id,
    };

    const result = await createDonation(donationData);

    if (result) {
      // 등록 성공 알람창 해제
      // alert('조공이 등록되었습니다!');
      handleClose();

      // 조공 리스트 새로고침
      const updatedDonations = await getAllDonations();
      onDonationCreated(updatedDonations);
    } else {
      // 등록 실패 알림창 해제
      // alert('등록 실패');
    }
  };

  const handleClose = () => {
    setNewDonation({
      title: '',
      subtitle: '',
      deadline: '',
      targetDonation: '',
      idolName: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="new-donation">
      <div className="modal__donation-header">
        <h3>새로운 조공 만들기</h3>
        <button className="btn--donationModalClose" onClick={handleClose}></button>
      </div>
      <input
        type="text"
        placeholder="제목"
        value={newDonation.title}
        onChange={(e) => handleInputChange('title', e.target.value)}
        className="input__donation"
      />
      <input
        type="text"
        placeholder="부제"
        value={newDonation.subtitle}
        onChange={(e) => handleInputChange('subtitle', e.target.value)}
        className="input__donation"
      />
      <input
        type="datetime-local"
        placeholder="마감일"
        value={newDonation.deadline}
        onChange={(e) => handleInputChange('deadline', e.target.value)}
        className="input__donation"
      />
      <input
        type="number"
        placeholder="목표 금액"
        value={newDonation.targetDonation}
        onChange={(e) => handleInputChange('targetDonation', e.target.value)}
        className="input__donation"
      />
      <input
        type="text"
        placeholder="아이돌 이름"
        value={newDonation.idolName}
        onChange={(e) => handleInputChange('idolName', e.target.value)}
        className="input__donation"
      />
      <Button height="btn btn--large" ariaLabel="등록" onClick={handleCreateDonation}>
        등록
      </Button>
    </Modal>
  );
}

export default NewDonationModal;
