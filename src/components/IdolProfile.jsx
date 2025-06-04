import { useState } from 'react';
import IdolProfileImage from './IdolProfileImage';

function IdolProfile({ size = '70px', profileImg, alt, idolName, idolGroup, isSelect = false, isDelete = false }) {
  const [isCheck, setCheck] = useState(isSelect);

  const handleToggle = () => {
    setCheck(!isCheck);
  };

  // cosnt

  return (
    <div
      onClick={handleToggle}
      className={`${isDelete ? 'idol__profile--delete' : false} idol__profile`}
      style={{ width: size }}
    >
      {/* <IdolProfileImage size={size} img={profileImg} alt={alt} isSelect={isDelete ? '' : isCheck} /> */}
      <IdolProfileImage size={size} img={profileImg} alt={alt} {...(!isDelete && { isSelect: isCheck })} />
      <div className="idol--name">{idolName}</div>
      <div className="idol--group">{idolGroup}</div>
    </div>
  );
}

export default IdolProfile;
