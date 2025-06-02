import { useEffect, useRef, useState } from 'react';
import logoImg from '../assets/images/logo.png';
import userImg from '../assets/images/profile.png';
import '../styles/header.css';

function Header() {
  //프로필 메뉴의 열림 상태 저장
  const [isOpen, setIsOpen] = useState(false);
  // 프로필 이미지 저장
  const [profileImg, setProfileImg] = useState(userImg);
  //profile의 DOM 저장, null=초기값설정
  const profileRef = useRef(null);
  const fileInputRef = useRef(null);

  //프로필 사진 변경
  const handleChangeProfile = (e) => {
    const file = e.target.files[0];
    const newUrl = URL.createObjectURL(file);
    setProfileImg(newUrl);
  };

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
        <img src={logoImg} alt="" />
      </h1>
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
            <li>마이페이지</li>
            <li onClick={() => fileInputRef.current?.click()}>프로필 이미지 변경</li>
            <li>로그아웃</li>
          </ul>
        )}
        <input
          className="profile__upload"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChangeProfile}
        />
      </div>
    </header>
  );
}

export default Header;
