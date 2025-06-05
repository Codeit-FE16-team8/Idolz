import facebook from '../assets/socialLogo/facebook.png';
import twitter from '../assets/socialLogo/twitter.png';
import instagram from '../assets/socialLogo/instagram.png';
import '../styles/footer.css';

function Footer() {
  const currentUrl = encodeURIComponent(window.location.href);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__branding">
          <p>@Team8</p>
        </div>

        <div className="footer__links">
          <a href="/privacy">Privacy</a>
          <a href="/faq">FAQ</a>
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
          <a href="https://instagram.com/Idolz" target="_blank">
            <img className="social__icon" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="footer__info">
        <p>Copyright &copy; 2025 @FE-part2-team8. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
