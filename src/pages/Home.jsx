import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Layout from '../component/Layout'
import ContactForm from '../component/ContactForm'
import Menebership from '../component/Menebership'
import Mentors from '../component/Mentors'
import WhyTrustUs from '../component/WhyTrustUs'
import SuccessStories from '../component/SuccessStories'
import ShapeYourJourney from '../component/ShapeYourJourney'
import TrustedInstitutions from '../component/TrustedInstitutions'
import HowWeWork from '../component/HowWeWork'
import Hero from '../component/Hero'
import StatsSection from '../component/StatsSection'
import WhatWeOffer from '../component/WhatWeOffer'
import MasterClass from '../component/MasterClass'

const Home = () => {

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

      <div id="home">
        <Hero />
      </div>

      <StatsSection />

      {/* <div id="institutions">
        <TrustedInstitutions />
      </div> */}

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

