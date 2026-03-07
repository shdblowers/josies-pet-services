import "./Testimonials.css";

const StarIcon = () => (
  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" />
  </svg>
);

const Stars = () => (
  <div className="testimonial14-stars">
    {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} />)}
  </div>
);

interface TestimonialProps {
  text: string;
  name: string;
  date: string;
}

const Testimonial = ({ text, name, date }: TestimonialProps) => (
  <div className="testimonial14-thq-content-elm thq-flex-column">
    <Stars />
    <p className="thq-body-large">{text}</p>
    <div className="testimonial14-thq-avatar-elm">
      <div className="testimonial14-thq-avatar-content-elm">
        <span className="thq-body-small testimonial14-name">{name}</span>
        <span className="thq-body-small">{date}</span>
      </div>
    </div>
  </div>
);

const testimonials: TestimonialProps[] = [
  {
    text: "Been a repeat client for over 3 years (multiple times per year). Cats are well looked after; updates are timely and detailed. Highly recommend Josie to anyone who wants their furry friends looked after. Best cat sitter in Chester.",
    name: "Ieva",
    date: "3 March 2025",
  },
  {
    text: "Josie was really attentive and caring. She kept me informed throughout at just the right level of communication. She has won the hearts of both my cats - even the feisty one! I wouldn't hesitate to recommend her.",
    name: "Sarah",
    date: "26 February 2025",
  },
  {
    text: "Josie was an absolute star and looked after our cats very well. Thanks Josie!",
    name: "Pam",
    date: "11 December 2024",
  },
  {
    text: "I recently had the pleasure of having Josie care for my two cats, Mia and Dotty, and I couldn't be more pleased with the experience. From the moment we first communicated, it was clear that she had a genuine love for animals and a professional approach to pet sitting. During my time away, Josie provided regular updates and photos, showing that Mia and Dotty were not only well taken care of but were also happy and relaxed. It was evident that she took the time to engage with each cat individually, catering to their unique personalities and needs. Mia, who can be quite shy, warmed up quickly, and Dotty, our playful one, enjoyed plenty of playtime and attention. Josie went above and beyond by ensuring our home was kept tidy, including cleaning up after the cats and even watering our plants. The attention to detail and commitment to providing top-notch care gave us peace of mind, allowing us to fully enjoy our time away without any worries. I highly recommend Josie to anyone in need of a reliable, caring, and professional pet sitter. We will definitely be booking her services again in the future! Thank you for taking such wonderful care of Mia and Dotty!",
    name: "Karen",
    date: "14 July 2024",
  },
  {
    text: "Josie was excellent looking after my cats while I was away. She was really good with the cats, was very professional and communication was great.",
    name: "Zoe",
    date: "29 January 2024",
  },
  {
    text: "Highly recommend. Would book Josie again!",
    name: "Greg",
    date: "5 September 2024",
  },
  {
    text: "Josie was wonderful. She kept us informed with regular updates and looked after our little family extremely well, we would very happily have her back again. Thank you so much!",
    name: "Eleanor",
    date: "13 June 2024",
  },
  {
    text: "Excellent as always",
    name: "Chris",
    date: "14 June 2024",
  },
  {
    text: "It wasn't the first time Josie took care of our three cats - definitely not the last as well. I got the updates and photos while away from home, our most timid rescue Diesel is letting Josie closer which is a great sign! Happy cats = highest recommendations 😀",
    name: "Ausra",
    date: "5 September 2023",
  },
  {
    text: "I am very pleased with Josie's care of my two cats. Great and speedy communication to arrange the booking and then regular updates whilst I was away. Recommended and hope to be able to book Josie again.",
    name: "Sinéad",
    date: "13 March 2023",
  },
  {
    text: "Really loved the experience - pics our happy pet every day, and good updates.",
    name: "Raluca",
    date: "5 August 2023",
  },
  {
    text: "We were really anxious about leaving our cat for the first time as our cat is nervous of strangers but Josie put us at ease during the meet and greet. It was obvious Josie cared for animals during the visit. During our holiday we had regular communications and photos. Our nervous cat was happy on our return and would book Josie again for future trips.",
    name: "Pamela",
    date: "19 May 2024",
  },
  {
    text: "Josie looks after my two little cats well, I always get pictures and she is very flexible with times. She also takes the time to learn about your pets individual needs, highly recommend.",
    name: "Mark",
    date: "5 May 2024",
  },
  {
    text: "This is the 2nd time we have chosen Josie to look after our 2 cats whilst we were away, and yet again we were very happy with the service she provides. Josie sent updates every day with photos and a description of how the cats were doing and what their mood was! She is such a friendly and kind person, and we have been so happy to choose her for our pet sitting needs!",
    name: "Sarah",
    date: "22 April 2024",
  },
];

export default function Testimonials() {
  return (
    <div id="reviews" className="testimonial14-thq-testimonial4-elm thq-section-padding">
      <div className="testimonial14-thq-max-width-elm thq-section-max-width">
        <div className="testimonial14-thq-section-title-elm">
          <h2 className="testimonial14-thq-title-elm thq-heading-2">Testimonials</h2>
          <p className="testimonial14-thq-subtitle-elm thq-body-large">
            Some feedback from my lovely clients.
          </p>
        </div>
        <div className="testimonial14-grid">
          {testimonials.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}
