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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
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
      } />
      <Route path="/tos" element={
        <>
          <Navbar />
          <TermsOfService />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;
