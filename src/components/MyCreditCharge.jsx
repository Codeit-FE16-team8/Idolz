import React, { useState } from 'react';
import CREDIT_IMG from '../assets/images/credit.png';

function MyCreditCharge({ onCharge }) {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('100');

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCharge = () => {
    const amount = parseInt(selected, 10);
    onCharge(amount); // 상위 컴포넌트에 충전 금액 전달
    alert(`${amount.toLocaleString()} 크레딧을 충전했습니다.`);
    handleClose();
  };

  const CreditOption = ({ value }) => (
    <div
      onClick={() => setSelected(value)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: selected === value ? '1px solid #f96d69' : '1px solid white',
        borderRadius: '8px',
        padding: '16px 20px',
        cursor: 'pointer',
        width: '295px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={CREDIT_IMG} alt="크레딧 아이콘" style={{ width: 24, height: 24 }} />
        <p
          style={{
            fontSize: '20px',
            fontWeight: '700',
            color: selected === value ? 'black' : '#888',
            margin: 0,
          }}
        >
          {value}
        </p>
      </div>
      <input
        type="radio"
        name="creditAmount"
        value={value}
        checked={selected === value}
        onChange={() => setSelected(value)}
        style={{ display: 'none' }}
      />
    </div>
  );

  return (
    <div>
      <button
        style={{
          color: 'var(--color-orange-F96D69)',
          padding: '10px 20px',
          border: '1px solid #f96d69',
          backgroundColor: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={handleOpen}
      >
        충전하기
      </button>

      {showModal && (
        <div
          onClick={handleClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              minWidth: '320px',
            }}
          >
            <h2 style={{ marginTop: 0 }}>크레딧 충전</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <CreditOption value="100" />
              <CreditOption value="500" />
              <CreditOption value="1000" />
            </div>

            <button
              onClick={handleCharge}
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #f96d69 0%, #fe5493 100%)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <img src={CREDIT_IMG} alt="크레딧 아이콘" style={{ width: '20px', height: '20px' }} />
              충전하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCreditCharge;
