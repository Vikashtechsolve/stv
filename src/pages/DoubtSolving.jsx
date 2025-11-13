import HowItWorks from "../component/doubtSolvingPage/HowItWorks";
import StudentTestimonials from "../component/doubtSolvingPage/StudentTestimonials";
import Layout from "../component/Layout";
import DoubtSolvingHero from "../component/doubtSolvingPage/DoubtSolvingHero";
import SubjectDetails from "../component/doubtSolvingPage/SubjectDetails";
import Mentors from "../component/doubtSolvingPage/Mentors";
import PricingPlans from "../component/doubtSolvingPage/PricingPlans";
import WhyChooseUs from "../component/doubtSolvingPage/WhyChooseUs";
import data from "../../rawdata.json"
import Faqs from "../component/Faqs";


export default function DoubtSolving() {

    const faqData=data.doubtSolvingFaq;


  return (
    <Layout >
        <DoubtSolvingHero />
        <HowItWorks />
        <SubjectDetails/>
        <StudentTestimonials />
        <Mentors/>
         <div id="pricingplans">
            <PricingPlans />
         </div>
        <WhyChooseUs/>
        <Faqs faqData={faqData} />
    </Layout>
  );

} 