import PolicyTemplate from './PolicyTemplate';

const ServicePolicy = () => (
  <PolicyTemplate
    title="서비스 운영 정책"
    description={`
본 운영 정책은 서비스 이용 과정에서 발생할 수 있는 문제를 예방하고, 이용자의 권리와 안전을 보호하기 위한 세부 기준입니다.

1. 계정 운영  
- 하나의 이용자는 하나의 계정만 생성할 수 있으며, 타인과의 계정 공유는 금지됩니다.  
- 비정상적인 접근, 다중 로그인 시 제한 조치가 취해질 수 있습니다.

2. 콘텐츠 관리  
- 커뮤니티, 게시판, 댓글 등 사용자가 생성한 콘텐츠에 대해 운영자는 모니터링 및 삭제 권한을 가집니다.  
- 불법 콘텐츠, 욕설, 음란물 등은 사전 경고 없이 삭제되며 제재가 적용됩니다.

3. 이용 제한 조치  
- 다음의 경우 서비스 이용이 제한될 수 있습니다:  
  - 반복적인 신고 발생  
  - 비정상적인 프로그램(봇, 매크로 등) 사용  
  - 타 이용자 괴롭힘, 스팸 전송 등  

4. 신고 및 제재  
- 모든 이용자는 서비스 내 신고 기능을 통해 문제를 제보할 수 있습니다.  
- 제재 수준은 경고 → 일시 정지 → 영구 정지의 단계로 운영됩니다.

5. 문의 및 이의 제기  
- 제재 조치에 대한 이의 제기는 고객센터를 통해 접수할 수 있으며, 운영자는 검토 후 조치를 취합니다.
    `}
  />
);

export default ServicePolicy;
