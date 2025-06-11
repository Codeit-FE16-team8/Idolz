import { useRef, useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import validateAllFields from '../components/validateAllFields';
import validateField from '../components/validateField';
import '../styles/auth.css';

function LoginPage() {
  const [errors, setErrors] = useState({ email: '', password: '' });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const refs = {
    email: emailRef,
    password: passwordRef,
  };

  const handleValidClick = () => {
    const errors = validateAllFields({
      refs,
    });
    setErrors(errors);
  };

  const handleValidate = (key, value) => {
    const { isValid, message } = validateField({ key, value, refs });
    setErrors((prev) => ({
      ...prev,
      [key]: isValid ? '' : message,
    }));
  };

  return (
    <AuthLayout pageType="login" onClick={handleValidClick}>
      <form action="#">
        <AuthInput
          type="text"
          groupName="email"
          inputName="email"
          placeholder="이메일을 입력해주세요"
          ref={emailRef}
          errors={errors.email}
          validate={handleValidate}
        >
          이메일
        </AuthInput>
        <AuthInput
          type="password"
          groupName="password"
          inputName="password"
          placeholder="비밀번호를 입력해주세요"
          ref={passwordRef}
          errors={errors.password}
          validate={handleValidate}
        >
          비밀번호
        </AuthInput>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
