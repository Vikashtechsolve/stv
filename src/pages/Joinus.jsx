import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../component/Layout";
import JoinusForm from "../component/joinus/JoinusForm"; // ✅ Corrected import path

const JoinUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // delay ensures layout is loaded before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);

      // Clear state to avoid repeated scrolling when navigating back
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <Layout>
      {/* ✅ Use capitalized component name here */}
      <JoinusForm />
    </Layout>
  );
};

export default JoinUs;
