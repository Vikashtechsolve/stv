import React from "react";

import flipkart from "../FullstackDeveloper/img/flipkart.png";
import deloitte from "../FullstackDeveloper/img/deloitte.png";
import netflix from "../FullstackDeveloper/img/nodemailer.png";
import google from "../FullstackDeveloper/img/cloudinary.png";
import microsoft from "../FullstackDeveloper/img/mircosoft.png";
import amazon from "../FullstackDeveloper/img/amazon.png";
import tcs from "../FullstackDeveloper/img/TCS.png";
import myntra from "../FullstackDeveloper/img/myntra.png";

const logos = [
  flipkart,
  deloitte,
  netflix,
  google,
  microsoft,
  amazon,
  tcs,
  myntra,
];

export default function HiringPartners() {
  return (
    <section className="bg-[#fff]    overflow-hidden">
      {/* <div className="w-full"> */}
        {/* Heading */}
        <h2 className="text-center text-3xl font-medium mb-12">
          Our{" "}
          <span className="text-red-700 mt- underline underline-offset-4 relative -top-2">
            Top Hiring Partners
          </span>
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full  overflow-hidden">
          <div className="bg-gradient-to-r from-[#FBEAEB] via-white to-red-50 py-10">
            {/* add whitespace-nowrap */}
            <div className="flex animate-marquee gap-16 whitespace-nowrap">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  className="h-[72px] object-contain hover:scale-110 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
