import { useRef } from 'react';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import '../styles/auth.css';
import AuthValidated from '../components/AuthValidated';

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const nicknameRef = useRef();
  // const passwordConfirmRef = useRef();

  const handleLoginClick = () => {
    AuthValidated({
      type: 'login',
      refs: {
        email: emailRef,
        password: passwordRef,
      },
    });
  };

  return (
    <AuthLayout pageType="login" onClick={handleLoginClick}>
      <form action="#">
        <AuthInput type="text" groupName="email" inputName="email" placeholder="이메일을 입력해주세요" ref={emailRef}>
          이메일
        </AuthInput>
        <AuthInput
          type="password"
          groupName="password"
          inputName="password"
          placeholder="비밀번호를 입력해주세요"
          ref={passwordRef}
        >
          비밀번호
        </AuthInput>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
