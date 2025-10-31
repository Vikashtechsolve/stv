import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./component/LoginPage";
import Dashboard from "./pages/Dashboard";
import MasterClasspages from "./pages/masterClass";  // Ensure correct case
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./component/ScrollToTop";
import OneToOneMentoring from "./pages/OneToOneMentoring";
import OnlineContests from "./pages/OnlineContests";
import DoubtSolving from "./pages/DoubtSolving";
import ResumeReview from "./pages/ResumeReview";
import AutoPay from "./utils/AutoPay";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./component/blogs/BlogDetail";
import JoinUs from "./pages/JoinUs";

const App = () => {
  return (
    <Router>

      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join-us" element={<JoinUs />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/masterClass" element={<MasterClasspages />} />  {/* Updated path */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/oneToOneMentoring" element={ <OneToOneMentoring/> } />
          <Route path="/online-contests" element={<OnlineContests />} />
          <Route path="/doubt-solving" element={ <DoubtSolving/> } />
          <Route path="/resume-review" element={ <ResumeReview/> } />
          <Route path="/pay" element={<AutoPay />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

        </Routes>
      <ScrollToTop />
    </Router>
  );
};


export default App;


