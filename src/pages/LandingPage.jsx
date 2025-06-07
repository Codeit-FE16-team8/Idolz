import '../styles/common.css';
import '../styles/landing.css';
import logo from '../assets/images/logo.png';
import bgImage01 from '../assets/images/landing_bg01.png';
import bgImage02 from '../assets/images/landing_bg02.png';
import bgImage03 from '../assets/images/landing_bg03.png';
import bgImage04 from '../assets/images/landing_bg04.png';

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Section 1 */}
      <section className="landing-section">
        <img src={bgImage01} alt="배경1" className="section-bg" />
        <div className="landing-overlay">
          <h2>
            내가 가장 좋아하는 아이돌을
            <br />
            가장 쉽게 덕질하는 법
          </h2>
          <img
            src={logo}
            alt="main logo"
            className="landing-logo"
            style={{ textAlign: 'center', justifyContent: 'center' }}
          />
          <button className="btn btn--large btn--color">지금 시작하기</button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="landing-section">
        <img src={bgImage02} alt="배경2" className="section-bg" />
      </section>

      {/* Section 3 */}
      <section className="landing-section">
        <img src={bgImage03} alt="배경3" className="section-bg" />
      </section>

      {/* Section 4 */}
      <section className="landing-section">
        <img src={bgImage04} alt="배경4" className="section-bg" />
      </section>
    </div>
  );
}

export default LandingPage;
