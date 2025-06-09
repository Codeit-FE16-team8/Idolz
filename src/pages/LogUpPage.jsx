import AuthInput from '../components/AuthInput';
import AuthLayout from '../components/AuthLayout';

function LogUpPage() {
  return (
    <AuthLayout pageType="signUp">
      <form action="#">
        <AuthInput type="text" groupName="email" inputName="email" placeholder="이메일을 입력해주세요">
          이메일
        </AuthInput>
        <AuthInput type="text" groupName="nickName" inputName="nickName" placeholder="닉네임을 입력해주세요">
          닉네임
        </AuthInput>
        <AuthInput type="password" groupName="password" inputName="password" placeholder="비밀번호를 입력해주세요">
          비밀번호
        </AuthInput>
        <AuthInput
          type="password"
          groupName="passwordConfirm"
          inputName="passwordConfirm"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        >
          비밀번호 확인
        </AuthInput>
      </form>
    </AuthLayout>
  );
}

export default LogUpPage;
