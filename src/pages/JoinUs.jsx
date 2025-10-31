import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../component/Layout";
import JoinusForm from "../component/joinus/JoinusForm";
import SEO from "../component/SEO";

const JoinUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <Layout>
      <SEO
        title="Join as a Trainer | VTS"
        description="Apply to become a trainer at VTS. Teach Java, Spring Boot, or React and help shape the next generation of developers."
        url="https://vikastechsolutions.com/joinus"
        image="https://vikastechsolutions.com/images/join-us.png"
      />
      <JoinusForm />
    </Layout>
  );
};

export default JoinUs;
