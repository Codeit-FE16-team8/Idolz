import { useState } from 'react';

function AuthInput({ type, groupName, inputName, placeholder, ref, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password';

  const inputType = isPassword && isVisible ? 'text' : type;

  const inputPadding = isPassword ? '13px 45px 13px 18px' : '13px 18px';

  return (
    <div className="auth__input--group">
      <label className="auth__label" htmlFor={groupName}>
        {children}
      </label>
      <input
        className={`auth__${groupName} auth__input`}
        type={inputType}
        name={inputName}
        id={groupName}
        placeholder={placeholder}
        style={{ '--input-padding': inputPadding }}
        ref={ref}
      />
      {isPassword && (
        <button
          type="button"
          className={`password__toggle--btn ${isVisible ? 'password__toggle--show' : 'password__toggle--hidden'}`}
          onClick={() => setIsVisible(!isVisible)}
        ></button>
      )}
    </div>
  );
}

export default AuthInput;
