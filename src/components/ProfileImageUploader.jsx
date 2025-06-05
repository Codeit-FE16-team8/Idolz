import { useState, useRef } from 'react';
import userImg from '../assets/images/profile.png';

function ProfileImageUploader({ children }) {
  const fileInputRef = useRef(null);

  // 프로필 이미지 저장
  const [profileImg, setProfileImg] = useState(() => {
    const savedImg = localStorage.getItem('profileImg');
    return savedImg || userImg;
  });

  const onClickFileInput = () => {
    fileInputRef.current?.click();
  };

  // 프로필 사진 변경
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    //용량 제한
    if (file.size > 1024 * 1024) {
      alert('1MB 이하 이미지만 업로드해주세요.');
      return;
    }

    // 1. 파일을 읽을 수 있는 객체 생성
    const reader = new FileReader();

    // 2. reader.onload, 파일 읽은 뒤 콜백
    reader.onload = () => {
      // result = Base64 문자열
      const result = reader.result;
      setProfileImg(result);
      localStorage.setItem('profileImg', result);
    };
    // 3. 이미지를 읽음, Base64로 변환
    reader.readAsDataURL(file);
  };

  return (
    <>
      <input className="profile__upload" type="file" accept="image/*" ref={fileInputRef} onChange={onChangeFile} />
      {children({ profileImg, onClickFileInput })}
    </>
  );
}

export default ProfileImageUploader;
