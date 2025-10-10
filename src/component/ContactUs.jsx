import React from "react";
import womenmentor from "../assets/womenmentor.png";
import whatsappIcon from "../assets/whatsapp.png";
import vtsImage from "../assets/logo.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.svg"; // ✅ Update this path if needed
const ContactUs = () => {
  return (
    <div
      style={{
        fontFamily: "Lato, sans-serif",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* === Google Fonts === */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600&family=Nunito+Sans:wght@400;500;600&family=Playfair+Display:wght@600&display=swap"
        rel="stylesheet"
      />

      {/* === TOP HEADING === */}
      <section style={{ textAlign: "center", marginTop: "60px" }}>
        <h1
          style={{
            color: "#000",
            fontSize: "38px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          Get in Touch with Us
        </h1>
        <p
          style={{
            color: "#ED0331",
            fontSize: "26px",
            fontFamily: "Lato",
            fontWeight: 600,
            marginTop: "12px",
          }}
        >
          Fill out the form below and we’ll get back to you within 24 hours.
        </p>
      </section>

      {/* === MAIN CONTACT FORM SECTION === */}
      <section
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          gap: "100px",
          flexWrap: "wrap",
          padding: "0 40px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "540px",
            display: "flex",
            flexDirection: "column",
            gap: "36px",
          }}
        >
          <h2
            style={{
              color: "#ED0331",
              fontSize: "32px",
              fontFamily: "Playfair Display",
              fontWeight: 600,
            }}
          >
            Have Questions? We’re Here to Help
          </h2>

          <div style={{ textAlign: "center" }}>
            <img
              src={womenmentor}
              alt="Support"
              style={{
                width: "100%",
                height: "344px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <div
              style={{
                color: "#000",
                fontSize: "32px",
                fontFamily: "Nunito Sans",
                fontWeight: 500,
                marginTop: "20px",
              }}
            >
              Let’s solve your doubts together!
            </div>
          </div>

          {/* Chat Button */}
          <button
            style={{
              background: "#20BA5A",
              color: "white",
              fontSize: "24px",
              fontFamily: "Nunito Sans",
              fontWeight: 600,
              padding: "12px 28px",
              borderRadius: "16px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              margin: "0 auto",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
              }}
            />
            Chat with us
          </button>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div
          style={{
            width: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {[
            "Enter your Full Name",
            "Enter your Email Address",
            "Enter your 10-digit mobile number",
            "Type your Query Here...",
          ].map((placeholder, i) => (
            <input
              key={i}
              placeholder={placeholder}
              style={{
                width: "100%",
                height: i === 3 ? "200px" : "60px",
                padding: "0 24px",
                borderRadius: "13px",
                border: "1.5px solid #ccc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontSize: "18px",
                color: "#333",
                fontFamily: "Nunito Sans",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.border = "1.5px solid #ED0331")
              }
              onBlur={(e) =>
                (e.target.style.border = "1.5px solid #ccc")
              }
              onMouseEnter={(e) =>
                (e.target.style.border = "1.5px solid #ED0331")
              }
              onMouseLeave={(e) =>
                (e.target.style.border = "1.5px solid #ccc")
              }
            />
          ))}

          <button
            style={{
              background: "linear-gradient(180deg, #ED0331 0%, #87021C 100%)",
              color: "white",
              fontSize: "22px",
              fontFamily: "Nunito Sans",
              fontWeight: 600,
              padding: "14px 38px",
              borderRadius: "18px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Submit
          </button>
        </div>
      </section>

      {/* === JOURNEY SECTION === */}
      <section style={{ marginTop: "100px", textAlign: "center" }}>
        <h2
          style={{
            color: "#000",
            fontSize: "32px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          Your Journey with VTS Starts Here
        </h2>

        <div
          style={{
            background: "rgba(208,208,208,0.4)",
            marginTop: "40px",
            padding: "50px 80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "900px", textAlign: "left" }}>
            <p style={{ color: "#646161", fontSize: "22px", lineHeight: "1.6" }}>
              At Vikas Tech Solutions, we believe every conversation is the start of a
              solution. Whether you’re a student seeking mentorship, an institute looking
              for collaboration, or a learner with questions about our programs — our team
              is always ready to assist you.
            </p>
            <p
              style={{
                color: "black",
                fontSize: "22px",
                lineHeight: "1.6",
                fontWeight: 500,
              }}
            >
              We value your time and make sure every message is answered with care. Reach
              out, and let’s take the next step toward your growth together.
            </p>
          </div>

          <img
            src={vtsImage}
            alt="VTS"
            style={{
              width: "285px",
              height: "192px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* === FOLLOW US SECTION === */}
      <section style={{ marginTop: "100px", textAlign: "center" }}>
        <h2
          style={{
            color: "#000",
            fontSize: "32px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          Follow us on
        </h2>

        <div
          style={{
            background: "rgba(208,208,208,0.4)",
            padding: "28px 60px",
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          {/* LinkedIn */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={linkedinIcon} alt="LinkedIn" width={40} height={40} />
            <span style={{ fontSize: "24px", color: "black" }}>LinkedIn</span>
          </div>

          {/* Instagram */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
            src={instagramIcon} // ✅ Update this path if needed
            alt="Instagram"
            style={{
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            objectFit: "contain",
            }}
        />
        <span style={{ fontSize: "24px", color: "black", fontFamily: "Nunito Sans" }}>
            Instagram
        </span>
        </div>


          {/* YouTube */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "50px",
                height: "36px",
                background: "#ED1D24",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: "12px solid white",
                }}
              />
            </div>
            <span style={{ fontSize: "24px", color: "black" }}>YouTube</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
