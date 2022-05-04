import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Donor from "./pages/Donor";
import BloodBank from "./pages/BloodBank";
import Hospital from "./pages/Hospital";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/blood_bank" element={<BloodBank />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
