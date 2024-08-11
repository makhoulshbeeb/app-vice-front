import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

import Landing from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />

        <Route path="/landing-page" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
