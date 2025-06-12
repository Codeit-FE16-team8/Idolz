// 랜딩 페이지 섹션 4 컴포넌트
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PhonePage03 from '../assets/images/PhonePage03.png';

function Section4() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.section ref={ref} className="landing-section section4">
      <div className="landing-content-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="yellow-highlight">나만의 아티스트</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          좋아하는 아티스트들의
          <br />
          소식을 모아보세요
        </motion.h2>

        <motion.img
          src={PhonePage03}
          alt="아티스트 소식 모아보기 앱 화면"
          className="PhonePage"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    </motion.section>
  );
}

export default Section4;
