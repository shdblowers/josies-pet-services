import "./HowItWorks.css";

const steps = [
  {
    title: "Get in touch",
    body: "Contact me via email or using the contact form below to check availability and get a tailored quote",
  },
  {
    title: "Meeting",
    body: "Before your first booking we will arrange a meeting where you can ask any questions you may have, I can meet your pet/s so they can get to know me a bit and we can make sure I have all the information I may need during the booking.\u00a0",
  },
  {
    title: "Confirm the booking",
    body: "If we are both happy I will send you details for payment and confirm the number of sits and dates of your booking. Payment should be made in full at least a week before the booking begins.",
  },
  {
    title: "Key hand over",
    body: "Keys and/or access codes can be provided at the meeting or dropped off to me before the booking begins. I may be able to collect keys but this may incur an extra fee if I am not in the area. While keys are held they are stored securely away from any identifying information and are labelled with the name/s of your pets.\u00a0",
  },
  {
    title: "Booking begins",
    body: "Sit back and relax knowing your pets are well cared for and you will receive updates as requested.",
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="content-list3-container thq-section-padding">
      <div className="content-list3-thq-max-width-elm thq-section-max-width thq-flex-column">
        <div className="content-list3-thq-content-elm1 thq-flex-column">
          <ul>
            <li className="content-list3-li1 thq-flex-column list-item">
              <h2 className="content-list3-thq-heading1-elm thq-heading-2">
                How it works
              </h2>
              <ul className="content-list3-ul2 thq-flex-column">
                {steps.map((step) => (
                  <li key={step.title} className="list-item">
                    <h3 className="thq-heading-3">{step.title}</h3>
                    <p className="thq-body-small">{step.body}</p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
