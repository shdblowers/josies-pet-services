import "./Pricing.css";

const CheckIcon = () => (
  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z" />
  </svg>
);

export default function Pricing() {
  return (
    <div
      id="visit-options"
      className="pricing4-thq-pricing10-elm thq-section-padding"
    >
      <div className="pricing4-thq-max-width-elm thq-section-max-width">
        <div className="pricing4-thq-section-title-elm">
          <div className="pricing4-thq-content-elm1">
            <h2 className="pricing4-thq-text-elm10 thq-heading-2">
              Visit options and pricing
            </h2>
            <p className="pricing4-thq-text-elm11 thq-body-large">
              I offer home visits where I visit your pet/s for around 30 minutes
              (or more depending on their needs). I feed, change water, clean
              cages/litter/let them outside and play with them. I can provide
              these visits once or twice a day.
            </p>
            <p className="pricing4-thq-text-elm12 thq-body-large">
              These fees apply to up to three animals, more than three pets will
              incur an extra charge. I am currently taking on clients in Newton,
              Upton, Hoole, Vicars Cross and central Chester or nearby. I am
              happy to travel further afield with an extra charge to cover the
              travel time and petrol. Please get in touch if you have these or
              any other requirements and I will send you a tailored quote.
            </p>
          </div>
        </div>

        <div className="pricing4-thq-content-elm2">
          {/* Plan 1 */}
          <div className="pricing4-thq-column-elm1 thq-card">
            <div className="pricing4-thq-content-elm3">
              <div className="pricing4-thq-price-elm1">
                <h3 className="pricing4-thq-text-elm13 thq-heading-3">
                  1 visit per day
                </h3>
                <p className="pricing4-thq-text-elm14 thq-body-large">
                  £12 per visit
                </p>
              </div>
              <div className="pricing4-thq-list-elm1">
                <div className="pricing4-thq-list-item-elm10">
                  <CheckIcon />
                  <span className="thq-body-small">Minimum of a 30 minute visit</span>
                </div>
              </div>
            </div>
            <div className="pricing4-thq-list-item-elm11">
              <CheckIcon />
              <span className="thq-body-small">Feed and water</span>
            </div>
            <div className="pricing4-thq-list-item-elm12">
              <CheckIcon />
              <span className="thq-body-small">Litter tray/cage cleaning</span>
            </div>
            <div className="pricing4-thq-list-item-elm13">
              <CheckIcon />
              <span className="thq-body-small">Play time</span>
            </div>
            <div className="pricing4-thq-list-item-elm14">
              <CheckIcon />
              <span className="thq-body-small">Water plants, take bins out, draw curtains etc</span>
            </div>
            <a href="#contact-us">
              <button className="pricing4-thq-button-elm1 thq-button-outline">
                Contact&nbsp;
              </button>
            </a>
          </div>

          {/* Plan 2 */}
          <div className="pricing4-thq-column-elm2 thq-card">
            <div className="pricing4-thq-price-elm2">
              <div className="pricing4-thq-price-elm3">
                <h3 className="pricing4-thq-text-elm21 thq-heading-3">
                  2 visits per day
                </h3>
                <p className="pricing4-thq-text-elm22 thq-body-large">
                  £24 per day
                </p>
              </div>
              <div className="pricing4-thq-list-elm2">
                <div className="pricing4-thq-list-item-elm15">
                  <CheckIcon />
                  <span className="thq-body-small">Minimum of a 30 minute visit</span>
                </div>
              </div>
              <div className="pricing4-thq-list-item-elm16">
                <CheckIcon />
                <span className="thq-body-small">Feed and water</span>
              </div>
              <div className="pricing4-thq-list-item-elm17">
                <CheckIcon />
                <span className="thq-body-small">Litter tray cleaning</span>
              </div>
              <div className="pricing4-thq-list-item-elm18">
                <CheckIcon />
                <span className="thq-body-small">Play time</span>
              </div>
            </div>
            <div className="pricing4-thq-list-item-elm19">
              <CheckIcon />
              <span className="thq-body-small">Water plants, take bins out draw curtains etc</span>
            </div>
            <a href="#contact-us">
              <button className="pricing4-thq-button-elm2 thq-button-filled">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
