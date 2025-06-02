function BoxBox({ number }) {
  return (
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
    </div>
  );
}
export default BoxBox;
