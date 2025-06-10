import PolicyTemplate from '../policies/PolicyTemplate';

const Account = () => (
  <PolicyTemplate
    title="개인정보 관리 페이지"
    description={`
이 페이지는 사용자의 개인정보를 관리할 수 있습니다.

1. 관리 항목
- 필수: 이메일, 비밀번호, 이름, 연락처 등  
- 선택: 닉네임, 결제 정보 등

2. 관리 방법
- 이메일을 바꾸고 싶을 경우, 새 이메일을 인증받아 변경할 수 있도록 합니다.
- 비밀번호 변경이 가능하게 합니다.(휴대폰이나 이메일 인증을 통해 본인 확인)

    `}
  />
);

export default Account;
