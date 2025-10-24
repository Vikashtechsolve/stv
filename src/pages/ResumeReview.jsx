import Faqs from "../component/Faqs";
import Layout from "../component/Layout";
import ResumeExperts from "../component/resumeReview/ResumeExperts";
import ResumeGuidanceSection from "../component/resumeReview/ResumeGuidanceSection";
import ResumeHero from "../component/resumeReview/ResumeHero";
import ResumeImportant from "../component/resumeReview/ResumeImportant";
import ResumeProcess from "../component/resumeReview/ResumeProcess";
import ResumeTestimonials from "../component/resumeReview/ResumeTestimonials";
import data from "../../rawdata.json"


export default function ResumeReview() {
  const faqData=data.resumeFaq;
  return (
    <Layout >
        <ResumeHero />
        <ResumeImportant/>
        <ResumeProcess/>
        <ResumeGuidanceSection/>
        <ResumeExperts/>
        <ResumeTestimonials/>
        <Faqs faqData={faqData}  />
    </Layout>
  );
}
