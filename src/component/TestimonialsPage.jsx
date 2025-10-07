import React, { useState } from "react";
import testimonialImg from "../assets/Testimonials.png"; // Local image

// Example JSON data
const testimonialData = {
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  title: "Testimonials",
};

const TestimonialsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => setIsPlaying(true);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "700px",
        padding: "40px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, white 0%, #C5C5C5 100%)",
        borderRadius: "24px",
      }}
    >
      {/* Header */}
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
  {testimonialData.title}
</h2>



      {/* Video Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1060px",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        {isPlaying ? (
          <video
            src={testimonialData.videoUrl}
            style={{
              width: "100%",
              maxHeight: "525px",
              borderRadius: "24px",
              objectFit: "cover",
            }}
            controls
            autoPlay
          />
        ) : (
          <>
            {/* Local Image Placeholder */}
            <img
              src={testimonialImg}
              alt="Video placeholder"
              style={{
                width: "100%",
                maxHeight: "525px",
                borderRadius: "24px",
                objectFit: "cover",
              }}
            />

            {/* Centered Play Button */}
            <div
              role="button"
              aria-label="Play video"
              onClick={handlePlayClick}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "75px",
                height: "75px",
                borderRadius: "50%",
                background: "#AFAFAF",
                opacity: 0.8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "translate(-50%, -50%) scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  "translate(-50%, -50%) scale(1)")
              }
            >
              {/* Triangle Play Icon */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "20px solid #1B1718",
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  marginLeft: "5px",
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;
