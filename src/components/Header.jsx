import { useEffect, useRef, useState } from 'react';
import logoImg from '../assets/images/logo.png';
import ProfileImageUploader from './ProfileImageUploader';
import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header() {
  //프로필 메뉴의 열림 상태 저장
  const [isOpen, setIsOpen] = useState(false);

  //profile의 DOM 저장, null=초기값설정
  const profileRef = useRef(null);

  // 메뉴 창 닫기
  useEffect(() => {
    // profile 밖 영역 선택했을 시
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    // 페이지를 누르면 handleClickOutside 실행
    document.addEventListener('mousedown', handleClickOutside);

    // 실행된 뒤 이벤트 정리
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/list">
          <img src={logoImg} alt="" />
        </Link>
      </h1>
      <ProfileImageUploader>
        {({ profileImg }) => (
          <div
            className="profile"
            ref={profileRef}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img className="profile__img" src={profileImg} alt="프로필" />
            {isOpen && (
              <ul className="profile__nav">
                <li>
                  <Link to="/mypage">마이페이지</Link>
                </li>
                <li>
                  <Link to="/settings">설정페이지</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </ProfileImageUploader>
    </header>
  );
}

export default Header;
