import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import JpeePlusLab from "./pages/JpeePlusLab";
import EestiPortal from "./pages/eesti-portal/EestiPortal";
import QAInJapan from "./pages/eesti-portal/QAInJapan";
import QAInOverseas from "./pages/eesti-portal/QAInOverseas";
import { Header } from "./components/0. Header";
import { Footer } from "./components/Footer";

import "./styles/globals.css";
import AboutEstonia from "./pages/eesti-portal/AboutEstonia";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jpee-plus-lab" element={<JpeePlusLab />} />
          <Route path="/eesti-portal" element={<EestiPortal />} />
          <Route path="/eesti-portal/qa" element={<Navigate to="/eesti-portal/qa-in-japan" replace />} />
          <Route path="/eesti-portal/qa-in-japan" element={<QAInJapan />} />
          <Route path="/eesti-portal/qa-in-overseas" element={<QAInOverseas />} />
          <Route path="/eesti-portal/about-estonia" element={<AboutEstonia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
