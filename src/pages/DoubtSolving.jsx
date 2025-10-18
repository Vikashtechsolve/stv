import HowItWorks from "../component/doubtSolvingPage/HowItWorks";
import StudentTestimonials from "../component/doubtSolvingPage/StudentTestimonials";
import Layout from "../component/Layout";
import DoubtSolvingHero from "../component/doubtSolvingPage/DoubtSolvingHero";
import SubjectDetails from "../component/doubtSolvingPage/SubjectDetails";
import Mentors from "../component/doubtSolvingPage/Mentors";
import PricingPlans from "../component/doubtSolvingPage/PricingPlans";
import WhyChooseUs from "../component/doubtSolvingPage/WhyChooseUs";

export default function DoubtSolving() {

  return (
    <Layout >
        <DoubtSolvingHero />
        <HowItWorks />
        <SubjectDetails/>
        <StudentTestimonials />
        <Mentors/>
        <PricingPlans />
        <WhyChooseUs/>
    </Layout>
  );

} 