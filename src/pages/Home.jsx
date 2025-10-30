import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../component/Layout";
import SEO from "../component/SEO";
import Hero from "../component/Hero";
import StatsSection from "../component/StatsSection";
import WhatWeOffer from "../component/WhatWeOffer";
import MasterClass from "../component/MasterClass";
import HowWeWork from "../component/HowWeWork";
import ShapeYourJourney from "../component/ShapeYourJourney";
import SuccessStories from "../component/SuccessStories";
import WhyTrustUs from "../component/WhyTrustUs";
import Mentors from "../component/Mentors";
import Menebership from "../component/Menebership";
import ContactForm from "../component/ContactForm";

const Home = () => {
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
        title="VTS | Learn, Grow & Build Your Future"
        description="Master Java, Spring Boot, React, and Full Stack with top mentors. Learn online or offline with VTS."
        url="https://vikastechsolutions.com/"
        image="https://vikastechsolutions.com/images/preview-home.png"
      />

      <div id="home">
        <Hero />
      </div>
      <StatsSection />
      <div id="offer">
        <WhatWeOffer />
      </div>
      <MasterClass />
      <div id="howWeWork">
        <HowWeWork />
      </div>
      <ShapeYourJourney />
      <div id="successStories">
        <SuccessStories />
      </div>
      <div id="whyTrustUs">
        <WhyTrustUs />
      </div>
      <div id="mentors">
        <Mentors />
      </div>
      <Menebership />
      <div id="contact">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Home;
