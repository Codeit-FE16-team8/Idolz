import { forwardRef, useState } from 'react';

const AuthInput = forwardRef(function AuthInput(props, ref) {
  const { type, groupName, inputName, placeholder, errors, validate, children } = props;
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
        style={{ ['--input-padding']: inputPadding }}
        ref={ref}
        onBlur={(e) => validate?.(inputName, e.target.value)}
      />
      {isPassword && (
        <button
          type="button"
          className={`password__toggle--btn ${isVisible ? 'password__toggle--show' : 'password__toggle--hidden'}`}
          onClick={() => setIsVisible(!isVisible)}
        ></button>
      )}
      {errors && <span className="invalid">{errors}</span>}
    </div>
  );
});

export default AuthInput;
