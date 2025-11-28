import Layout from '../component/Layout';
import ContactUs from '../component/ContactUs';
import { Empowering } from '../component/Empowering';
import { AboutVTS } from '../component/AboutVTS';
import TestimonialsPage from '../component/TestimonialsPage';
import WhatWeBring from '../component/WhatWeBring';
import OurTeam from '../component/OurTeam';
import Milestones from '../component/Milestones';

const About = () => {
    const thumbNail="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-design-template-7fdcbfed1fb311be96a282920fba8515_screen.jpg?ts=1738234094";
    return (
        <Layout>
            <div className='w-full overflow-hidden' >
                <Empowering/>
                <AboutVTS/>
                <TestimonialsPage videoUrl={"https://www.w3schools.com/html/mov_bbb.mp4"} testimonialImg={thumbNail} title={""} />
                <WhatWeBring/>
                <OurTeam/>
                <Milestones/>
            </div>
        </Layout>
    )
}
export default About
