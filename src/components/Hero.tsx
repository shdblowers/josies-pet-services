import "./Hero.css";

export default function Hero() {
  return (
    <div id="hero" className="hero8-thq-header26-elm thq-section-padding">
      <div className="hero8-thq-max-width-elm thq-section-max-width thq-flex-column">
        <div className="hero8-thq-column-elm">
          <div className="hero8-thq-content-elm">
            <h1 className="hero8-thq-text-elm1 thq-heading-1">
              Welcome to Josie's Pet Services
            </h1>
            <p className="hero8-thq-text-elm2 thq-body-large">
              Professional Pet Sitting Service Provided with Love and Care
            </p>
            <div className="hero8-thq-actions-elm">
              <a href="#contact-us">
                <button className="thq-button-filled hero8-thq-button-elm1">Contact</button>
              </a>
              <a href="#visit-options">
                <button className="thq-button-outline hero8-thq-button-elm2">Price List</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
