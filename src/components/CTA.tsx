import "./CTA.css";

export default function CTA() {
  return (
    <div className="thq-section-padding" style={{ width: "100%" }}>
      <div className="thq-section-max-width">
        <div className="cta26-thq-accent2-bg-elm">
          <div className="cta26-thq-accent1-bg-elm">
            <div className="cta26-container2">
              <div className="cta26-thq-content-elm">
                <span className="thq-heading-2">
                  Book Your Pet Sitting Service Today!
                </span>
                <p className="thq-body-large">
                  I can't wait to meet your pet and provide loving care while
                  you're away.
                </p>
              </div>
              <div className="cta26-thq-actions-elm">
                <a href="#contact-us">
                  <button type="button" className="thq-button-filled cta26-button">
                    Contact us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
