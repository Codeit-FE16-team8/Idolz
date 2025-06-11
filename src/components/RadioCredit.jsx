function RadioCredit({ id, groupName, children, selected, onSelect }) {
  const isChecked = selected === children;
  return (
    <div className={`radio radio__credit ${isChecked ? 'selected' : ''}`}>
      <input type="radio" name={groupName} id={id} checked={isChecked} onClick={() => onSelect(children)} readOnly />
      <label htmlFor={id}>
        <div className="radio__credit--value">{children}</div>
        <span className="radio-icon"></span>
      </label>
    </div>
  );
}

export default RadioCredit;
