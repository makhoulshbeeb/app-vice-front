import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Signup from "./components/Signup";
import Landing from "./components/LandingPage";
import AppPage from "./components/AppPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app/:id" element={<AppPage />} />
      </Routes>
  
    </Router>
  );
}

export default App;
