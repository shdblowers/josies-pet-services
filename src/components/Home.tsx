import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Pricing from "./Pricing";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Home() {
  const location = useLocation();

  // scroll to hash target on every navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="home-container1">
        <Hero />
        <About />
        <Pricing />
        <HowItWorks />
        <CTA />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
