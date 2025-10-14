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

export default function OneToOneMentoring() {

  const faqData=data.mentorshipFaq;

  return (
    <Layout className="bg-[#E2E2E2]">
        <MentorshipHero/>
        <WhatIsMentorship />
        <MentorshipCards/>
        <MentorshipDomain/>
        <MentorshipSteps/>
        <WhyChooseUs/>
        <StudentsFeedback/>
        <Faqs faqData={faqData} />
    </Layout>
  );

} 