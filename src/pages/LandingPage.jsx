// 랜딩 페이지
import '../styles/landing.css';
import Section1 from '../Landing/Section01';
import Section2 from '../Landing/Section02';
import Section3 from '../Landing/Section03';
import Section4 from '../Landing/Section04';

// 랜딩 페이지 구성
function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-multi-section">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

export default LandingPage;
