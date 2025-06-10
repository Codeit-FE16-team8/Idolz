import { useState } from 'react';
import { createVote } from '../api/vote';
import { getAllIdols } from '../api/idol';
import Modal from './Modal';
import Button from '../components/Button';
import RadioIdol from '../components/RadioIdol';

function VoteModal({ isOpen, onClose, idolList, selectGender, onVoteSuccess }) {
  const [selectVoteIdol, setSelectVoteIdol] = useState(null);

  const handleVote = async () => {
    if (!selectVoteIdol) {
      alert('아이돌을 선택해주세요.');
      return;
    }

    const result = await createVote(selectVoteIdol);
    if (result) {
      alert('투표 성공!');
      handleClose();

      // 아이돌 데이터 새로고침
      const updatedIdols = await getAllIdols();
      onVoteSuccess(updatedIdols);
    } else {
      alert('투표 실패');
    }
  };

  const handleClose = () => {
    setSelectVoteIdol(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="voting">
      <h2>{selectGender === 'female' ? '이달의 여자아이돌 투표' : '이달의 남자아이돌 투표'}</h2>
      <div className="voting_scroll">
        {idolList
          .filter((idol) => idol.gender === selectGender)
          .map((idol, index) => (
            <div className="radioIdol__inner" key={idol.id} onClick={() => setSelectVoteIdol(idol.id)}>
              <RadioIdol
                id={`radio${idol.id}`}
                groupName="radioGroup1"
                profileImg={idol.profilePicture}
                alt={idol.name}
                idx={index + 1}
                name={`${idol.group} ${idol.name} `}
                vote={idol.totalVotes}
              />
            </div>
          ))}
      </div>

      <Button height="large" ariaLabel="투표하기" onClick={handleVote}>
        투표하기
      </Button>
      <p>
        투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
      </p>
      <button className="btn--modalClose" onClick={handleClose}></button>
    </Modal>
  );
}

export default VoteModal;
