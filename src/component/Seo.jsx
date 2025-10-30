// src/component/Seo.jsx
import { Helmet } from "react-helmet-async";

const Seo = ({ title, description }) => (
  <Helmet>
    <title>{title ? `${title} | VTS` : "VTS | Learn & Grow"}</title>
    <meta
      name="description"
      content={
        description ||
        "Master Java, Spring Boot, and React with experts. Learn with VTS online or offline."
      }
    />
    <link rel="canonical" href={window.location.href} />
  </Helmet>
);

export default Seo;
