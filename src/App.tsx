import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import TermsOfService from "./components/TermsOfService";
import Footer from "./components/Footer";

function App() {
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
        <TermsOfService />
        <Footer />
      </div>
    </>
  );
}

export default App;
