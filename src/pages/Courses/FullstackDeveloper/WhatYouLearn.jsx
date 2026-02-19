import React from "react";

// Mini Toolkit Icons
import js from "../FullstackDeveloper/img/JS.png";
import node from "../FullstackDeveloper/img/JS.png";
import mongo from "../FullstackDeveloper/img/MongoDB.png";
import html from "../FullstackDeveloper/img/HTML.png";
import css from "../FullstackDeveloper/img/CSS 3.png";
import tailwind from "../FullstackDeveloper/img/TailwindCSS.png";
import github from "../FullstackDeveloper/img/github.png";
import jwt from "../FullstackDeveloper/img/JWT.png";
import postman from "../FullstackDeveloper/img/Postman.png";
import vscode from "../FullstackDeveloper/img/VSCODE.png";
import vercel from "../FullstackDeveloper/img/Vercel.png";

// Macro Toolkit Icons
import react from "../FullstackDeveloper/img/React.png";
import redux from "../FullstackDeveloper/img/Redux.png";
import cloudinary from "../FullstackDeveloper/img/Cloudinary.png";
import render from "../FullstackDeveloper/img/React.png";
import nodemailer from "../FullstackDeveloper/img/nodemailer.png";
import socket from "../FullstackDeveloper/img/socket.io.png";
import mui from "../FullstackDeveloper/img/MongoDB.png";
import check from "../../../assets/Check.png";

const miniFeatures = [
  "JavaScript fundamentals and ES6+ concepts",
  "Build dynamic user interfaces using React",
  "Backend development with Node.js & Express",
  "Database design and operations with MongoDB",
  "REST APIs, authentication & authorization",
  "Essential DSA preparation for interviews",
];

const macroFeatures = [
  "Advanced JavaScript & React patterns",
  "State management with Redux & Redux Toolkit",
  "Scalable backend systems using Node.js & Express",
  "MongoDB optimization & advanced schema design",
  "Real-time applications using WebSockets",
  "Authentication, security & API best practices",
  "Cloud deployment and production workflows",
  "Extensive DSA preparation (230–280+ problems)",
];

const miniTools = [
  js, node, mongo, html, css,
  tailwind, github, jwt, postman,
  vscode, vercel
];

const macroTools = [
  js, react, redux, node, mongo,
  tailwind, github, jwt, postman,
  vscode, vercel, html, css,
  cloudinary, render, nodemailer,
  socket, mui
];

const ToolKit = ({ tools }) => (
  <div className="flex flex-wrap gap-6 items-center">
    {tools.map((tool, i) => (
      <img
        key={i}
        src={tool}
        className="h-10 object-contain"
      />
    ))}
  </div>
);

const FeatureList = ({ features }) => (
  <ul className="space-y-4 mb-8">
    {features.map((item, index) => (
      <li key={index} className="flex gap-3">

        {/* red tick */}
        {/* <span className="text-red-600 text-xl mt-1">
          ✓
        </span> */}
        <img src={check} alt="Check" className="h-4" />

        <span className="text-gray-800">
          {item}
        </span>

      </li>
    ))}
  </ul>
);

const WhatYouLearn = () => {
  return (
    <section className="bg-[#f5f2f1] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-medium mb-3 ">
          What Will You{" "}
          <span className="text-[#B11C20] underline relative -top-3 underline-offset-4">
            Learn
          </span>
        </h2>

        <p className="text-gray-700">
          Master in-demand MERN stack skills with hands-on learning and real-world tools
        </p>
      </div>

      {/* Programs */}
      <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Mini Program */}
        <div >

          <h3 className="text-xl mb-2">
            Mini Program –{" "}
            <span className="text-[#B11C20] font-medium">
              Full Stack MERN Development
            </span>
          </h3>

          <p className="mb-6">
            <span className="font-medium right-2">3 Months | Fast-Track Learning + Internship</span> 
          </p>

          <FeatureList features={miniFeatures} />

          <p className="font-medium mb-4">Tool Kit :</p>

          <ToolKit tools={miniTools} />

        </div>

        {/* Macro Program */}
        <div>

          <h3 className="text-xl mb-2">
            Macro Program –{" "}
            <span className="text-[#B11C20] font-medium">
              Full Stack MERN Development
            </span>
          </h3>

          <p className="mb-6">
            <span className="font-medium">6 Months | Advanced Training + Paid Internship</span> 
          </p>

          <FeatureList features={macroFeatures} />

          <p className="font-medium mb-4">Tool Kit :</p>

          <ToolKit tools={macroTools} />

        </div>

      </div>

    </section>
  );
};

export default WhatYouLearn;
