import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer4-thq-footer7-elm thq-section-padding">
      <div className="footer4-thq-max-width-elm thq-section-max-width">
        <div className="footer4-thq-content-elm">
          <div className="footer4-thq-logo-elm" />
          <div className="footer4-thq-links-elm">
            <a href="#about" className="thq-body-small">About</a>
            <a href="#visit-options" className="thq-body-small">Visit Options and Pricing</a>
            <a href="#reviews" className="thq-body-small">Reviews</a>
            <a href="#contact-us" className="thq-body-small">Contact Us</a>
            <a href="#how-it-works" className="thq-body-small">How it works</a>
          </div>
        </div>
        <div className="footer4-thq-credits-elm">
          <div className="thq-divider-horizontal" />
          <div className="footer4-thq-row-elm">
            <div className="footer4-container">
              <span className="thq-body-small">
                © {new Date().getFullYear()} Josie's Pet Services
              </span>
            </div>
            <div className="footer4-thq-footer-links-elm">
              <span className="footer4-thq-text-elm2 thq-body-small">Privacy Policy</span>
              <span className="thq-body-small">Terms of Service</span>
              <span className="thq-body-small">Cookies Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
