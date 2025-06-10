import { useRef, useState } from 'react';
import AuthInput from '../components/AuthInput';
import AuthLayout from '../components/AuthLayout';
import validateAllFields from '../components/validateAllFields';
import validateField from '../components/validateField';

function LogUpPage() {
  const [errors, setErrors] = useState({ email: '', password: '', nickname: '', passwordConfirm: '' });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const refs = {
    email: emailRef,
    password: passwordRef,
    nickname: nicknameRef,
    passwordConfirm: passwordConfirmRef,
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
    <AuthLayout pageType="signUp" onClick={handleValidClick}>
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
          type="text"
          groupName="nickName"
          inputName="nickName"
          placeholder="닉네임을 입력해주세요"
          ref={nicknameRef}
          errors={errors.nickname}
          validate={handleValidate}
        >
          닉네임
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
        <AuthInput
          type="password"
          groupName="passwordConfirm"
          inputName="passwordConfirm"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          ref={passwordConfirmRef}
          errors={errors.passwordConfirm}
          validate={handleValidate}
        >
          비밀번호 확인
        </AuthInput>
      </form>
    </AuthLayout>
  );
}

export default LogUpPage;
