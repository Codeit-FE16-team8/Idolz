function RadioCredit({ id, groupName, children, isChecked = false }) {
  return (
    <div className="radio radio__credit">
      <input type="radio" name={groupName} id={id} defaultChecked={isChecked} />
      <label htmlFor={id}>
        <div className="radio__credit--value">{children}</div>
        <span className="radio-icon"></span>
      </label>
    </div>
  );
}

export default RadioCredit;
