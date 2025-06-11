import { useState } from 'react';
import Button from '../components/Button';
import icon from '../assets/images/Chart.png';
import VoteModal from '../modal/VoteModal';

function MonthlyChartVote({ idolList, selectGender, creditAmount, onVote, onVoteSuccess }) {
  // 투표 모달 상태
  const [showVoteModal, setShowVoteModal] = useState(false);

  // 투표 성공 후 처리
  const handleVoteSuccess = (updatedIdols) => {
    setShowVoteModal(false); // 모달 닫기
    onVoteSuccess(updatedIdols); // 상위 컴포넌트로 결과 전달
  };

  return (
    <>
      <div>
        <Button
          height="medium"
          width="auto"
          icon={icon}
          alt="Chart"
          ariaLabel="차트 투표하기"
          onClick={() => setShowVoteModal(true)}
        >
          차트 투표하기
        </Button>
      </div>

      {/* 투표하기 모달 */}
      <VoteModal
        isOpen={showVoteModal}
        onClose={() => setShowVoteModal(false)}
        idolList={idolList}
        selectGender={selectGender}
        creditAmount={creditAmount}
        onVote={onVote}
        onVoteSuccess={handleVoteSuccess}
      />
    </>
  );
}

export default MonthlyChartVote;
