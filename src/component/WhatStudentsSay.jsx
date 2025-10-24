import React, { useRef, useState, useEffect } from "react";
import image from "./../assets/whatstudentsdays.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "RITIKA PANDEY",
      quote:
        "I attended the Resume Building masterclass and within a week my CV looked 10x better. The mentor explained every detail step by step and even shared templates. This has boosted my confidence for interviews.",
      img: image,
    },
    {
      name: "NATALIA",
      quote:
        "The Data Structures session cleared all my basics in just one hour. I used to struggle with arrays, but the mentor’s examples made it so easy to understand. It felt like a full semester packed into 60 minutes.",
      img: image,
    },
    {
      name: "NEHA PATEL",
      quote:
        "I never thought online classes could feel so engaging. The mentor gave personal attention to each of us, answered doubts live, and even shared notes afterward. Totally worth much more than the fee!",
      img: image,
    },
    {
      name: "SAHIL PANDEY",
      quote:
        "The competitive programming masterclass was a game changer for me. I learned problem-solving tricks that I now apply in coding contests. The best part was the real-time coding examples shared during the class.",
      img: image,
    },
    {
      name: "NEHA PATEL",
      quote:
        "I never thought online classes could feel so engaging. The mentor gave personal attention to each of us, answered doubts live, and even shared notes afterward. Totally worth much more than the fee!",
      img: image,
    },
    {
      name: "SAHIL PANDEY",
      quote:
        "The competitive programming masterclass was a game changer for me. I learned problem-solving tricks that I now apply in coding contests. The best part was the real-time coding examples shared during the class.",
      img: image,
    },
  ];

  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth / 2;
      carouselRef.current.scrollBy({
        left: direction === "next" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const cardWidth = carousel.scrollWidth / testimonials.length;
      const index = Math.round(carousel.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [testimonials.length]);

  const containerStyle = {
  
    width: "100%",
    minHeight: "100vh",
    padding: "60px 20px",
    background: "#E2E2E2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    color: "#444",
  };

  const carouselWrapperStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    gap: "15px",
  };

  const carouselStyle = {
    display: "flex",
    gap: "25px",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    flexGrow: 1,
    paddingBottom: "50px",
  };

  const cardStyle = {
    width: "270px",
    height: "420px",
    background: "linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), #ED0331",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
    transition: "transform 0.3s",
  };

  const cardTopStyle = {
    position: "relative",
    background: "#fff",
    height: "290px",
    padding: "15px",
    borderRadius: "12px 12px 0 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    wordWrap: "break-word",
    fontWeight: 500,
    color: "#222",
  };

  const quoteSymbolStyle = {
    color: "#222",
    fontSize: "50px",
    fontFamily: "Lexend Peta, sans-serif",
    fontWeight: 500,
    textTransform: "uppercase",
    wordWrap: "break-word",
    marginBottom: "-30px",
  };

  const quoteTextStyle = {
    color: "#222",
    fontSize: "16px",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 400,
    lineHeight: "25px",
    wordWrap: "break-word",
  };

  const imgWrapperStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const imgStyle = {
    
    height: "100%",
    borderRadius: "50%",
    marginTop: "-80px",
    border: "2px solid #fff",
  };

  const nameStyle = {
    position: "absolute",
    bottom: "12px",
    width: "100%",
    textAlign: "center",
    color: "#D8D8D8",
    fontSize: "21px",
    fontFamily: "Playfair Display, serif",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    wordWrap: "break-word",
  };

  const arrowStyle = {
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.65)", // light transparent look
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  fontSize: "30px",
  fontWeight: "bold",
  color: "#333",
  zIndex: 5,
  transition: "all 0.3s ease",
  backdropFilter: "blur(4px)",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  };

  const dotStyle = (active) => ({
    width: "12px",
    height: "12px",
    borderRadius: "9999px",
    background: active ? "#ED0331" : "#434343",
    transition: "all 0.3s",
  });
const handleArrowHover = (e, isHover) => {
  e.currentTarget.style.transform = isHover
    ? "translateY(-50%) scale(1.15)"
    : "translateY(-50%) scale(1)";
  e.currentTarget.style.boxShadow = isHover
    ? "0 6px 14px rgba(237, 3, 49, 0.3)"
    : "0 4px 10px rgba(0, 0, 0, 0.2)";
};

const handleArrowClick = (e) => {
  const arrow = e.currentTarget;
  arrow.style.backgroundColor = "#ED0331";
  arrow.style.color = "#fff";
  setTimeout(() => {
    arrow.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
    arrow.style.color = "#333";
  }, 200);
};

  return (
    <div style={containerStyle}>
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
        What Students Say
      </h2>

      <div style={carouselWrapperStyle}>
        {/* Left Arrow */}
       <div
            style={{ ...arrowStyle, left: "10px" }}
            onClick={(e) => {
              handleArrowClick(e);
              scroll("prev");
            }}
            onMouseEnter={(e) => handleArrowHover(e, true)}
            onMouseLeave={(e) => handleArrowHover(e, false)}
          >
        &#60;
      </div>

        {/* Carousel */}
        <div ref={carouselRef} style={carouselStyle}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={cardTopStyle}>
                <span style={quoteSymbolStyle}>“</span>
                <span style={quoteTextStyle}>{t.quote}</span>
              </div>
              <div style={imgWrapperStyle}>
                <img src={t.img} alt={t.name} style={imgStyle} />
              </div>
              <p style={nameStyle}>{t.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          style={{ ...arrowStyle, right: "10px" }}
          onClick={(e) => {
            handleArrowClick(e);
            scroll("next");
          }}
          onMouseEnter={(e) => handleArrowHover(e, true)}
          onMouseLeave={(e) => handleArrowHover(e, false)}
        >
          &#62;
        </div>
      </div>

      {/* Slider Dots */}
      <div style={dotsContainerStyle}>
        {testimonials.map((_, i) => (
          <div key={i} style={dotStyle(i === activeIndex)} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
