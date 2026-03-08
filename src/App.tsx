import Home from "./components/Home";
import TermsOfService from "./components/TermsOfService";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
