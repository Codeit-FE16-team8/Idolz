function alertbtn() {
  alert('버튼');
}
function MonthlyChartVote() {
  return (
    <div>
      <button onClick={alertbtn}>투표하기</button>
    </div>
  );
}

export default MonthlyChartVote;
