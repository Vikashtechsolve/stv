import React from "react";
import AnanyaImg from "../assets/anayasharma.png"; // ✅ import at top

// ✅ Sample dynamic data (you can fetch this later from API or JSON)
const masterClassData = {
  mainTitle: "Why Choose Our “Master Class”",
  subTitle: "Meet Our Master Class Mentors",
  mentor: {
    name: "Ananya Sharma",
    role: "Data Science Mentor, Ex-Amazon",
    image: AnanyaImg, // Correctly required
  },
  points: [
    {
      title: "Affordable Learning",
      description: "Start your journey with live masterclasses at affordable prices.",
    },
    {
      title: "Focused Learning",
      description: "Deep dive into one topic with practical, easy-to-understand examples.",
    },
    {
      title: "Expert Mentors",
      description: "Learn directly from industry professionals and experienced teachers.",
    },
    {
      title: "Practical Insights",
      description: "Gain real-world knowledge through hands-on exercises.",
    },
    {
      title: "Flexible Schedule",
      description: "Attend classes at your convenience and pace.",
    },
    {
      title: "Lifetime Access",
      description: "Revisit class recordings and resources anytime.",
    },
  ],
};

const WhyChooseMasterClass = ({ data = masterClassData }) => {
  const { mainTitle, subTitle, mentor, points } = data;

  return (
    <div className="w-full bg-white py-20 px-6 flex flex-col items-center">
      {/* Main Title */}
      <h2
  style={{
    fontSize: "48px",
    fontFamily: "Playfair Display, serif",
    fontWeight: 600,
    lineHeight: "64.05px",
    textAlign: "center",
    marginBottom: "40px",
    wordWrap: "break-word",
    background: "linear-gradient(90deg, #ED0331, #87021C)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
        {mainTitle}
      </h2>

      {/* Card + Content */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-7xl w-full">
        {/* Left side: Card + Subtitle */}
        <div className="flex flex-col items-center gap-6">
          <h3
            style={{
              color: "black",
              fontSize: "32px",
              fontFamily: "Playfair Display, serif",
              fontWeight: 600,
              lineHeight: "67.84px",
              textAlign: "center",
            }}
          >
            {subTitle}
          </h3>

          <div
            style={{
              width: "519px",
              height: "570px",
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              background: "linear-gradient(180deg, white 0%, #999999 100%)",
              marginTop: "100px",
            }}
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              style={{
                width: "465px",
                height: "396px",
                position: "absolute",
                left: "27px",
                top: "92px",
              }}
            />
            <div
              style={{
                width: "519px",
                height: "82px",
                position: "absolute",
                left: 0,
                top: "488px",
                background: "rgba(254.75,254.75,254.75,0.4)",
                borderRadius: "24px",
              }}
            ></div>

            <div
              style={{
                width: "288px",
                position: "absolute",
                left: "115px",
                top: "496px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  color: "#ED0331",
                  fontSize: "26px",
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {mentor.name}
              </div>
              <div
                style={{
                  color: "#2E2E2E",
                  fontSize: "18px",
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {mentor.role}
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Points */}
<div className="flex flex-col gap-6 max-w-lg">
  {points.map((point, index) => (
    <div key={index}>
      <h4
        style={{
          color: "#ED0331",
          fontSize: "28px",
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
          lineHeight: "48px", // reduced
          marginBottom: "0px", // removed gap
        }}
      >
        {point.title}
      </h4>
      <p
        style={{
          color: "#6C6C6C",
          fontSize: "24px",
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 600,
          lineHeight: "28px", // tighter text block
          marginTop: "2px",
        }}
      >
        {point.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default WhyChooseMasterClass;
