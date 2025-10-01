import React from 'react'
import Navbar from '../component/Navbar'
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
    return (
        <Layout>
            <Hero/>
            <StatsSection/>
            <TrustedInstitutions/>
            <WhatWeOffer/>
            <MasterClass/>
            <HowWeWork/>
            <ShapeYourJourney/>
            <SuccessStories/>
            <WhyTrustUs/>
            <Mentors/>
            <Menebership/>
            <ContactForm />
        </Layout>
    )
}

export default Home
