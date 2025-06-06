import '../styles/common.css';
import '../styles/landing.css';
import logo from '../assets/images/logo.png';
import bgImage01 from '../assets/images/landing_bg01.png';
import '../assets/images/landing_bg02.png';
import '../assets/images/landing_bg03.png';
import '../assets/images/landing_bg04.png';

function LandingPage() {
  return (
    <div className="landing-container">
      <img src={bgImage01} alt="background" className="landing-bg" />

      <div className="landing-overlay">
        <img src={logo} alt="main logo" className="landing-logo" />
        <h2>
          내가 가장 좋아하는 아이돌을
          <br />
          가장 쉽게 덕질하는 법
        </h2>
        <button className="landing-button">시작하기</button>
      </div>
    </div>
  );
}

export default LandingPage;
