// 랜딩 페이지 섹션 1 컴포넌트
import { motion } from 'framer-motion';
import Landinglogo from '../../assets/images/Landinglogo.svg';
import bgImage01 from '../../assets/images/landing_bg01.png';
import { useNavigate } from 'react-router-dom';
import { useCursor } from '../CursorContext';

function Section1() {
  const navigate = useNavigate();
  const { setCursor } = useCursor();

  const handleStartClick = () => {
    localStorage.removeItem('interestedIdols');
    localStorage.removeItem('myCredit');
    localStorage.removeItem('cursor');
    setCursor(null);
    navigate('/list');
  };

  return (
    <motion.section
      className="landing-section section1"
      style={{ backgroundImage: `url(${bgImage01})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="landing-overlay">
        <div className="landing-top">
          <motion.h2
            className="landing-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            내가 좋아하는 아이돌을
            <br />
            가장 <span className="highlight">쉽게 덕질</span>하는 방법
          </motion.h2>

          <motion.img
            src={Landinglogo}
            alt="팬덤k_logo"
            className="landing-logo"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/list')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          />
        </div>

        <motion.button
          className="btn btn--large btn--color"
          onClick={handleStartClick}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          지금 시작하기
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Section1;
