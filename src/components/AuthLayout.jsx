import { Link } from 'react-router-dom';
import Button from './Button';
import logoImg from '../assets/images/logo.png';
import googleIcon from '../assets/images/ic_google.png';
import kakaoIcon from '../assets/images/ic_kakao.png';

function AuthLayout({ pageType, onClick, children }) {
  const configs = {
    login: {
      mainText: '로그인',
      subText: '회원가입',
      authLinkGuideText: '팬덤케이는 처음이신가요?',
      authLink: 'logUp',
    },
    signUp: {
      mainText: '회원가입',
      subText: '로그인',
      authLinkGuideText: '이미 계정이 있으신가요?',
      authLink: 'login',
    },
  };

  const { mainText, subText, authLinkGuideText, authLink } = configs[pageType] || {};

  return (
    <div className="auth__layout">
      <div className="auth__logo">
        <Link to="/">
          <img src={logoImg} alt="팬덤케이" />
        </Link>
      </div>
      <div className="auth__content">
        <div className="auth__form">
          {children}
          <Button ariaLabel={`${mainText} 버튼`} radius="round" isDisabled={false} onClick={onClick}>
            {mainText}
          </Button>
        </div>
        <div className="auth__social--btns">
          <p>간편 {mainText}하기</p>
          <a href="https://www.google.com/" aria-label={`구글로 ${mainText}`} target="_blank" rel="noopener noreferrer">
            <img src={googleIcon} alt={`구글 ${mainText} 버튼`} />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            aria-label={`카카오톡으로 ${mainText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kakaoIcon} alt={`카카오톡 ${mainText} 버튼`} />
          </a>
        </div>
        <div className="auth__link">
          <p>{authLinkGuideText}</p>
          <Link to={`/${authLink}`} className="auth__link--action">
            {subText}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AuthLayout;
