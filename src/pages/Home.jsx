import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Layout from "../component/Layout";
import ContactForm from "../component/ContactForm";
import Menebership from "../component/Menebership";
import Mentors from "../component/Mentors";
import WhyTrustUs from "../component/WhyTrustUs";
import SuccessStories from "../component/SuccessStories";
import ShapeYourJourney from "../component/ShapeYourJourney";
import TrustedInstitutions from "../component/TrustedInstitutions";
import HowWeWork from "../component/HowWeWork";
import Hero from "../component/Hero";
import StatsSection from "../component/StatsSection";
import WhatWeOffer from "../component/WhatWeOffer";
import MasterClass from "../component/MasterClass";

const Home = () => {
  const location = useLocation();

  // Smooth scroll to a section (if navigated via link with state)
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <Layout>
      {/* ✅ SEO TAGS via React Helmet */}
      <Helmet>
        <title>VTS | Learn, Grow & Build Your Future with Expert Mentors</title>
        <meta
          name="description"
          content="VTS is India’s leading platform for mastering Java, Spring Boot, React, and Full Stack Development. Learn online or offline with expert mentors."
        />
        <meta
          name="keywords"
          content="VTS, Java Training, Spring Boot, React, Full Stack, Developer Mentorship, Online Learning, Tech Courses"
        />
        <meta property="og:title" content="VTS | Learn, Grow & Build Your Future" />
        <meta
          property="og:description"
          content="Master real-world skills with expert-led Java and Full Stack courses at VTS. Start your tech journey today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/images/preview-home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VTS | Learn & Build Your Future" />
        <meta
          name="twitter:description"
          content="Join VTS and learn from top industry mentors in Java, Spring Boot, and React."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/preview-home.png" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      {/* ✅ Page Sections */}
      <div id="home">
        <Hero />
      </div>

      <StatsSection />

      {/* Optional Section */}
      {/* <TrustedInstitutions /> */}

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
