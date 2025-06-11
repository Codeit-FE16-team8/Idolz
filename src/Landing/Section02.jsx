// 랜딩 페이지 섹션 2 컴포넌트
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage02 from '../assets/images/landing_bg02.png';
import PhonePage01 from '../assets/images/PhonePage01.png';

function Section2() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.section
      ref={ref}
      className="landing-section section2"
      style={{
        backgroundImage: `url(${bgImage02})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="landing-content-wrapper">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="yellow-highlight">후원하기</span>
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          좋아하는 아이돌에게
          <br />
          쉽게 조공해보세요
        </motion.h2>

        <motion.img
          src={PhonePage01}
          alt="아이돌 후원 기능을 보여주는 앱 화면"
          className="PhonePage"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    </motion.section>
  );
}

export default Section2;
