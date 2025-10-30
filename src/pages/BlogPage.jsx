import Layout from "../component/Layout";
import BlogHero from "../component/blogs/BlogHero";
import SEO from "../component/SEO";

const BlogPage = () => (
  <Layout>
    <SEO
      title="VTS Blog | Developer Insights & Tutorials"
      description="Read expert insights and tutorials on Java, React, and Spring Boot from VTS mentors."
      url="https://vikastechsolutions.com/blog"
      image="https://vikastechsolutions.com/images/blog.png"
    />
    <BlogHero />
  </Layout>
);

export default BlogPage;
