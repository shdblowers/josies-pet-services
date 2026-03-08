import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const LOGO_URL = "/logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar8-container1">
      <header className="navbar8-thq-navbar-interactive-elm">
        <Link to="/">
          <img alt="Josie's Pet Services logo" src={LOGO_URL} className="navbar8-thq-image1-elm" />
        </Link>

        {/* Desktop menu */}
        <div className="navbar8-thq-desktop-menu-elm">
          <nav className="navbar8-thq-links-elm1">
            <a href="#about" className="navbar8-thq-link1-elm1 thq-link thq-body-small">About</a>
            <a href="#visit-options" className="thq-link thq-body-small">Visit Options</a>
            <a href="#reviews" className="navbar8-thq-link3-elm1 thq-link thq-body-small">Reviews</a>
            <a href="#contact-us" className="thq-link thq-body-small">Contact Us</a>
            <Link to="/tos" className="thq-link thq-body-small">Terms of Service</Link>
          </nav>
          <div className="navbar8-thq-buttons-elm1">
            <a href="#about">
              <button className="navbar8-thq-action1-elm1 thq-button-animated thq-button-filled">
                Learn More
              </button>
            </a>
            <a href="#contact-us">
              <button className="navbar8-thq-action2-elm1 thq-button-animated thq-button-outline">
                Contact Us
              </button>
            </a>
          </div>
        </div>

        {/* Burger */}
        <div
          className="navbar8-thq-burger-menu-elm"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z" />
          </svg>
        </div>

        {/* Mobile menu */}
        <div className={`navbar8-thq-mobile-menu-elm${mobileOpen ? " teleport-show" : ""}`}>
          <div className="navbar8-thq-nav-elm">
            <div className="navbar8-thq-top-elm">
              <Link to="/">
                <img alt="Josie's Pet Services logo" src={LOGO_URL} className="navbar8-thq-logo-elm" />
              </Link>
              <div
                className="navbar8-thq-close-menu-elm"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z" />
                </svg>
              </div>
            </div>
            <nav className="navbar8-thq-links-elm2">
              <a href="#about" className="thq-link thq-body-small" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#visit-options" className="thq-link thq-body-small" onClick={() => setMobileOpen(false)}>Visit Options</a>
              <a href="#reviews" className="thq-link thq-body-small" onClick={() => setMobileOpen(false)}>Reviews</a>
              <a href="#contact-us" className="thq-link thq-body-small" onClick={() => setMobileOpen(false)}>Contact Us</a>
              <Link to="/tos" className="thq-link thq-body-small" onClick={() => setMobileOpen(false)}>Terms of Service</Link>
            </nav>
            <div className="navbar8-thq-buttons-elm2">
              <a href="#about" onClick={() => setMobileOpen(false)}>
                <button className="thq-button-filled">Learn More</button>
              </a>
              <a href="#contact-us" onClick={() => setMobileOpen(false)}>
                <button className="thq-button-outline">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </header>
  );
}
