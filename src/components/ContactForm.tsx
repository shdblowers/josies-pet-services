import { useState, FormEvent } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact-us"
      className="contact-form3-thq-contact9-elm thq-section-padding"
    >
      <div className="thq-flex-row thq-section-max-width contact-form3-thq-max-width-elm">
        <img
          alt="Josie with a pet"
          src="/josie-pet-photo-500h.jpeg"
          className="contact-form3-image"
        />
        <div className="contact-form3-thq-content-elm1 thq-flex-column">
          <div className="contact-form3-thq-section-title-elm thq-card">
            <div className="contact-form3-thq-content-elm2">
              <h2 className="thq-heading-2">Contact us</h2>
              <span className="thq-body-small">
                Please get in touch by emailing{" "}
                <a href="mailto:hello@josiespetservice.co.uk" style={{ color: "var(--dl-color-theme-primary1)" }}>
                  hello@josiespetservice.co.uk
                </a>{" "}
                or by using the contact form below. Please let me know the
                details of your booking request, your location and dates.
              </span>
            </div>
          </div>
          {submitted ? (
            <div className="thq-card contact-form3-success">
              <p className="thq-body-large">
                Thank you for your message! I'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="thq-card">
              <div className="contact-form3-thq-input-elm1">
                <label htmlFor="contact-form-3-name" className="thq-body-small">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  name="contact-form-3-name"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-thq-input-elm2">
                <label htmlFor="contact-form-3-email" className="thq-body-small">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-3-email"
                  name="contact-form-3-email"
                  required
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <label htmlFor="contact-form-3-message" className="thq-body-small">
                  Message
                </label>
                <textarea
                  id="contact-form-3-message"
                  name="contact-form-3-message"
                  rows={3}
                  placeholder="Enter your message"
                  className="contact-form3-textarea thq-input"
                />
              </div>
              <div className="contact-form3-thq-checkbox-elm">
                <input
                  type="checkbox"
                  id="contact-form-3-check"
                  name="contact-form-3-check"
                  required
                  defaultChecked
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-3-check"
                  className="contact-form3-thq-text-elm6 thq-body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button
                type="submit"
                className="contact-form3-thq-button-elm thq-button-filled"
              >
                <span className="thq-body-small">Submit</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
