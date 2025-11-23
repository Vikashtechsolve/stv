import React from "react";
import womenmentor from "../assets/womenmentor.png";
import whatsappIcon from "../assets/whatsapp.png";
import vtsImage from "../assets/logo.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.svg"; // ✅ Update this path if needed
const ContactUs = () => {
  return (
    <div className="font-lato w-full overflow-x-hidden section-bg-gray">
      {/* === TOP HEADING === */}
      <section className="text-center mt-[60px]">
        <h1 className="heading-primary-md">
          Get in Touch with Us
        </h1>
        <p className="text-red-primary text-[26px] font-lato font-semibold mt-3">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </section>

      {/* === MAIN CONTACT FORM SECTION === */}
      <section className="mt-20 flex justify-center gap-[100px] flex-wrap px-10">
        {/* LEFT SIDE */}
        <div className="w-[540px] flex flex-col gap-9">
          <h2 className="heading-playfair-red">
            Have Questions? We're Here to Help
          </h2>

          <div className="text-center">
            <img
              src={womenmentor}
              alt="Support"
              className="w-full h-[344px] object-cover rounded-xl"
            />
            <div className="text-black text-[32px] font-nunito font-medium mt-5">
              Let's solve your doubts together!
            </div>
          </div>

          {/* Chat Button */}
          <button className="btn-whatsapp text-2xl py-3 px-7 rounded-2xl mx-auto">
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="w-7 h-7 object-contain"
            />
            Chat with us
          </button>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-[550px] flex flex-col items-center gap-10">
          {[
            "Enter your Full Name",
            "Enter your Email Address",
            "Enter your 10-digit mobile number",
            "Type your Query Here...",
          ].map((placeholder, i) => (
            <input
              key={i}
              placeholder={placeholder}
              className={`input-standard ${i === 3 ? 'h-[200px]' : 'h-[60px]'}`}
            />
          ))}

          <button className="btn-gradient-red-vertical text-[22px] py-3.5 px-[38px] rounded-2xl mt-2.5">
            Submit
          </button>
        </div>
      </section>

      {/* === JOURNEY SECTION === */}
      <section className="mt-25 text-center">
        <h2 className="heading-playfair">
          Your Journey with VTS Starts Here
        </h2>

        <div className="section-bg-light mt-10 py-[50px] px-20 flex justify-between items-center flex-wrap">
          <div className="w-[900px] text-left">
            <p className="text-[#646161] text-[22px] leading-[1.6]">
              At Vikas Tech Solutions, we believe every conversation is the start of a
              solution. Whether you're a student seeking mentorship, an institute looking
              for collaboration, or a learner with questions about our programs — our team
              is always ready to assist you.
            </p>
            <p className="text-black text-[22px] leading-[1.6] font-medium">
              We value your time and make sure every message is answered with care. Reach
              out, and let's take the next step toward your growth together.
            </p>
          </div>

          <img
            src={vtsImage}
            alt="VTS"
            className="w-[285px] h-[192px] rounded-lg object-cover"
          />
        </div>
      </section>

      {/* === FOLLOW US SECTION === */}
      <section className="mt-25 text-center">
        <h2 className="heading-playfair">
          Follow us on
        </h2>

        <div className="section-bg-light py-7 px-[60px] mt-30 flex justify-center gap-[100px] flex-wrap">
          {/* LinkedIn */}
          <div className="flex items-center gap-2.5">
            <img src={linkedinIcon} alt="LinkedIn" width={40} height={40} />
            <span className="text-2xl text-black font-nunito">LinkedIn</span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2.5">
        <img
              src={instagramIcon}
            alt="Instagram"
              className="w-11 h-11 rounded-lg object-contain"
        />
            <span className="text-2xl text-black font-nunito">
            Instagram
        </span>
        </div>

          {/* YouTube */}
          <div className="flex items-center gap-2.5">
            <div className="w-[50px] h-9 bg-[#ED1D24] flex justify-center items-center rounded">
              <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-white" />
            </div>
            <span className="text-2xl text-black font-nunito">YouTube</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;