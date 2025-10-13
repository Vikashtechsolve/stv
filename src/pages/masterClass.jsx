import React from 'react'
import Navbar from '../component/Navbar'
import Layout from '../component/Layout'
import UpcomingEvents from '../component/UpcomingEvents'
import MasterClassHero from '../component/MasterclassHero'
import WhyChooseMasterClass from '../component/WhyChooseMasterClass';
import PastEventsPage from '../component/PastEvents';
import WhatStudentsSay from '../component/WhatStudentsSay';
import TestimonialsPage from '../component/TestimonialsPage';
import FAQ from '../component/FaqData'
import testimonialImg from "../assets/Testimonials.png"; // Local image


const MasterClasspages = () => {
    return (
        <Layout>
        <MasterClassHero/>
        <WhyChooseMasterClass/>
        <UpcomingEvents/>
        <PastEventsPage/>
        <WhatStudentsSay/>
        <TestimonialsPage videoUrl={"https://www.w3schools.com/html/mov_bbb.mp4"} testimonialImg={testimonialImg} title={"Testimonials"} />
        <FAQ/>
        </Layout>
    )
}
export default MasterClasspages;