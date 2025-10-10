import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./component/LoginPage";
import Dashboard from "./pages/Dashboard";
import MasterClasspages from "./pages/masterClass";  // Ensure correct case
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/masterClass" element={<MasterClasspages />} />  {/* Updated path */}
        <Route path="/contactUs" element={<ContactPage />} />  {/* Updated path */}
      </Routes>
    </Router>
  );
};

export default App;