import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./component/LoginPage";
import Dashboard from "./pages/Dashboard";
import MasterClasspages from "./pages/masterClass";  // Ensure correct case
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/masterClass" element={<MasterClasspages />} />  {/* Updated path */}
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="*" element={<h1>404 Not Found</h1>} />
         <Route path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;