import Donation from './Donation';

function BoxBox({ number }) {
  return (
    <div>
      <div
        style={{
          minWidth: '150px', //두개
          height: '100px',
          border: '1px solid blue',
          marginRight: '10px', //두개 합이 List에서
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>box{number}</p>
        <Donation />
      </div>
    </div>
  );
}
export default BoxBox;
