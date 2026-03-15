import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "45081ef0-df92-4229-a43a-52d4ac213292");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    await response.json();
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
                <a href="mailto:hello@josiespetservices.uk" style={{ color: "var(--dl-color-theme-primary1)" }}>
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
                <label htmlFor="name" className="thq-body-small">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-thq-input-elm2">
                <label htmlFor="email" className="thq-body-small">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <label htmlFor="message" className="thq-body-small">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Enter your message"
                  className="contact-form3-textarea thq-input"
                />
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
