// 랜딩 페이지 섹션 3 컴포넌트
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PhonePage02 from '../assets/images/PhonePage02.png';

function Section3() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.section
      ref={ref}
      className="landing-section section3"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="landing-content-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="yellow-highlight">이달의 아티스트</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          내 아티스트에게 1등의
          <br />
          영예를 선물하세요
        </motion.h2>

        <motion.img
          src={PhonePage02}
          alt="이달의 아티스트 기능을 보여주는 앱 화면"
          className="PhonePage"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    </motion.section>
  );
}

export default Section3;
