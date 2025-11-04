import Layout from "../component/Layout";
import MentorshipCards from "../component/mentorshipPage/MentorshipCards";
import MentorshipDomain from "../component/mentorshipPage/MentorshipDomain";
import MentorshipHero from "../component/mentorshipPage/MentorshipHero";
import MentorshipSteps from "../component/mentorshipPage/MentorshipSteps";
import WhatIsMentorship from "../component/mentorshipPage/WhatIsMentorship";
import WhyChooseUs from "../component/mentorshipPage/WhytoChooseUs";
import StudentsFeedback from "../component/mentorshipPage/StudentsFeedback";
import Faqs from "../component/Faqs";
import data from "../../rawdata.json"
import MentorSection from "../component/mentorshipPage/MentorSection";
import StartJourney from "../component/mentorshipPage/StartJourney";

export default function OneToOneMentoring() {

  const faqData=data.mentorshipFaq;

  return (
    <Layout >
        <MentorshipHero/>
        <WhatIsMentorship />
        <MentorshipCards/>
        <MentorshipDomain/>
        <MentorshipSteps/>
         <div id="mentors-section" >
          <MentorSection/>
         </div>
        <WhyChooseUs/>
        <StudentsFeedback/>
        <Faqs faqData={faqData} />
        <StartJourney/>
    </Layout>
  );

} 