import Layout from "../component/Layout";
import ContactUs from "../component/ContactUs";
import SEO from "../component/SEO";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Us | VTS"
      description="Get in touch with VTS for course details, trainer opportunities, or support."
      url="https://vikastechsolutions.com/contact"
    />
    <ContactUs />
  </Layout>
);

export default ContactPage;
