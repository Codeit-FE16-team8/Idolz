import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const SkeletonCard = styled.div`
  width: 280px;
  height: 350px;
  border-radius: 10px;
  background-color: #e0e0e0;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-right: 24px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;

const Funding = styled.div`
  padding: 30px;
`;

const WaitingDonationTitle = styled.div`
  width: 140px;
  height: 28px;
  background-color: var(--color-gray-A3A5A8);
  border-radius: 6px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

function WaitingDonationSkeleton() {
  return (
    <Funding>
      <div className="funding-header">
        <WaitingDonationTitle />
        <button style={{ width: '120px' }} className="btn btn--color btn--medium" disabled>
          {'        '}
        </button>
      </div>
      <div className="sliderWrapper">
        <div
          className="donationContainer"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </Funding>
  );
}

export default WaitingDonationSkeleton;
