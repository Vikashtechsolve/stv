import React from 'react'
import Navbar from '../component/Navbar'
import Layout from '../component/Layout'
import UpcomingEvents from '../component/UpcomingEvents'
import MasterClassHero from '../component/MasterclassHero'
import WhyChooseMasterClass from '../component/WhyChooseMasterClass';
import PastEventsPage from '../component/PastEvents';
import WhatStudentsSay from '../component/WhatStudentsSay';
import TestimonialsPage from '../component/TestimonialsPage';
import FAQ from '../component/Faqs'
import testimonialImg from "../assets/Testimonials.png"; // Local image

import data from '../../rawdata.json';
// FAQ data with dropdown options
const faqData = data.masterclassFaq;


const MasterClasspages = () => {
    return (
        <Layout>
        <MasterClassHero/>
        <WhyChooseMasterClass/>
        <UpcomingEvents/>
        <PastEventsPage/>
        <WhatStudentsSay/>
        <TestimonialsPage videoUrl={"https://www.w3schools.com/html/mov_bbb.mp4"} testimonialImg={testimonialImg} title={"Testimonials"} />
        <FAQ faqData={faqData} />
        </Layout>
    )
}
export default MasterClasspages;