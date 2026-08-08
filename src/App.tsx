import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JpeePlusLab from "./pages/JpeePlusLab";
import EestiPortal from "./pages/eesti-portal/EestiPortal";
import QA from "./pages/eesti-portal/qa";
import { Header } from "./components/0. Header";
import { Footer } from "./components/Footer";

import "./styles/globals.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jpee-plus-lab" element={<JpeePlusLab />} />
          <Route path="/eesti-portal" element={<EestiPortal />} />
          <Route path="/eesti-portal/qa" element={<QA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
