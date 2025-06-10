import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/setting.css';
import ProfileImageUploader from '../components/ProfileImageUploader';
import gear from '../assets/images/gear.png';

function Setting() {
  const [nickname, setNickname] = useState('홍길동');
  const [statusMessage, setStatusMessage] = useState('상태 메세지를 입력하세요');

  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 처리 로직 (예: 토큰 제거 등)
    // localStorage.removeItem('token'); 또는 setUser(null) 같은 처리 가능

    alert('로그아웃 되었습니다.'); // 🔸 팝업 표시
    navigate('/login'); // 🔸 회원가입 페이지로 이동
  };

  const handleDeleteAccount = () => {
    // 계정 삭제 관련 처리
    alert('계정이 삭제되었습니다.');
    navigate('/logup');
  };

  return (
    <div className="setting">
      {/* 프로필 이미지 변경 */}
      <div className="setting__personal">
        <ProfileImageUploader>
          {({ profileImg, onClickFileInput }) => (
            <div className="setting__profile">
              <img className="setting__profile-img" src={profileImg} alt="프로필" />
              <button className="setting__profile-edit" onClick={onClickFileInput} aria-label="프로필 이미지 변경">
                <img src={gear} alt="설정" />
              </button>
            </div>
          )}
        </ProfileImageUploader>
      </div>

      {/* 닉네임, 상태메시지 */}
      <div className="setting__user">
        <input
          className="setting__name"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
        <input
          className="setting__message"
          type="text"
          value={statusMessage}
          onChange={(e) => setStatusMessage(e.target.value)}
          placeholder="상태 메세지"
        />
      </div>

      {/* 메뉴 리스트 */}
      <div className="setting__menu">
        <ul>
          <li>
            <Link to="/account">계정 정보</Link>
          </li>
          <li>
            <Link to="/notifications">알림 설정</Link>
          </li>
          <li>
            <Link to="/theme">테마 설정</Link>
          </li>
          <li>
            <Link to="/cursor">커서 변경</Link>
          </li>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
          <li>
            <button onClick={handleDeleteAccount}>계정삭제</button>
          </li>
          <li>
            <Link to="/customer_center">고객센터</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Setting;
