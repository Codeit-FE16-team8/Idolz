import '../styles/common.css';
import '../styles/landing.css';
import logo from '../assets/images/logo.png';
import PhonePage01 from '../assets/images/PhonePage01.png';
import PhonePage02 from '../assets/images/PhonePage02.png';
import PhonePage03 from '../assets/images/PhonePage03.png';
import bgImage01 from '../assets/images/landing_bg01.png';
import bgImage02 from '../assets/images/landing_bg02.png';
import bgImage03 from '../assets/images/landing_bg03.png';
import bgImage04 from '../assets/images/landing_bg04.png';

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Section 1 */}
      <section className="landing-section" style={{ backgroundImage: `url(${bgImage01})` }}>
        <div className="landing-overlay">
          <div className="landing-top">
            <h2 className="landing-heading">
              내가 좋아하는 아이돌을
              <br />
              가장 <span className="highlight">쉽게 덕질</span>하는 방법
            </h2>
            <img src={logo} alt="logo" className="landing-logo" />
          </div>

          <button className="btn btn--large btn--color">지금 시작하기</button>
        </div>
      </section>

      <div className="landing-multi-section">
        <div className="vertical-gradient-bar" />
        {/* Section 2, 3, 4 */}
        <section className="landing-section" style={{ backgroundImage: `url(${bgImage02})` }}>
          <h3>
            <span className="yellow-highlight">후원하기</span>
          </h3>
          <h2>
            좋아하는 아이돌에게
            <br />
            쉽게 조공해보세요
          </h2>
          <img src={PhonePage01} alt="PhonePage01" className="PhonePage" />
        </section>
        <section className="landing-section" style={{ backgroundImage: `url(${bgImage03})` }}>
          <h3>
            <span className="yellow-highlight">이달의 아티스트</span>
          </h3>
          <h2>
            내 아티스트에게 1등의의
            <br />
            영예를 선물하세요
          </h2>
          <img src={PhonePage02} alt="PhonePage02" className="PhonePage" />
        </section>
        <section className="landing-section" style={{ backgroundImage: `url(${bgImage04})` }}>
          <h3>
            <span className="yellow-highlight">나만의 아티스트</span>
          </h3>
          <h2>
            좋아하는 아티스트들의
            <br />
            소식을 모아보세요
          </h2>
          <img src={PhonePage03} alt="PhonePage03" className="PhonePage" />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
