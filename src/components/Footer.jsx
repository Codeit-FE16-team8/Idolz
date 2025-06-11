import { Link } from 'react-router-dom';
import facebook from '../assets/socialLogo/facebook.png';
import twitter from '../assets/socialLogo/twitter.png';
import instagram from '../assets/socialLogo/instagram.png';
import '../styles/footer.css';

function Footer() {
  const currentUrl = encodeURIComponent(window.location.href);

  return (
    <footer className="footer">
      <div className="footer__1">
        <Link className="customer_center" to="/customer_center">
          고객센터
        </Link>
        <div className="footer__number">
          <h3>1313-8282</h3>
          <p>09:00~18:00</p>
        </div>
        <ul>
          <li>평일: 전체 문의 상담</li>
          <li>토요일, 공휴일: 크레딧 충전 건 상담</li>
          <li>일요일: 휴무</li>
        </ul>
        <div className="footer__1-buttons">
          <button>카톡 상담 (평일:09:00~18:00)</button>
          <button>이메일 문의</button>
        </div>
      </div>

      <div className="footer__2">
        <Link to="/usepolicy">이용약관</Link>
        <Link to="/paid">유료서비스 이용약관</Link>
        <Link to="/privacy">개인정보 처리방침</Link>
        <Link to="/service">서비스 운영 정책</Link>
        <Link to="/youth-protection">아동 및 청소년 보호 정책</Link>
        <Link to="/cookie">쿠키 정책</Link>
      </div>

      <div className="footer__3">
        <div className="footer__company">
          <p>(주)아이돌즈</p>
          <p>서울 00구 00대로 00길 0 00타워 </p>
          <p>FEteam8@gmail.com</p>
        </div>

        <div className="footer__social">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social__icon" src={facebook} alt="facebook" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=멋진%20웹사이트를%20공유합니다!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social__icon" src={twitter} alt="twitter" />
          </a>
          <a href="https://instagram.com/Idolz_team8_official" target="_blank">
            <img className="social__icon" src={instagram} alt="instagram" />
          </a>
        </div>

        <div className="footer__info">
          <p>Copyright &copy; 2025 @FE-part2-team8. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
