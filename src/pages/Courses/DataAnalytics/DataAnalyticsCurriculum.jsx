import React, { useState } from "react";
import { FileText } from "lucide-react";

const curriculumData = {
  mini: [
    {
      title: "Module 0 - Course Summary",
      subtitle: "Course Summary",
      summary:
        "The Data Analytics Program is a fast-track, 3-month industry-focused course designed to help learners build strong foundations in data analysis and become job-ready. The program combines live online instructor-led sessions, real data projects, and a 1-month internship to provide practical exposure and hands-on experience with real-world datasets.",
      content: [
        {
          heading: "Weekly Schedule",
          text: "10 hours per week (2 hours per day × 5 days)",
        },
        {
          heading: "Course Duration",
          text: "3 months (2 months of structured training + 1 month internship)",
        },
        {
          heading: "Training Mode",
          text: "Live online classes combined with real data projects",
        },
        {
          heading: "Certification",
          text: "Certificate of Completion in Data Analytics",
        },
      ],
    },

    {
      title: "Module 1",
      subtitle: "Python Programming & Statistics Fundamentals",
      summary:
        "This module builds a strong foundation in data analysis and statistical thinking, enabling learners to work confidently with data and make data-driven decisions using Python and statistical techniques.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Python programming for data analysis",
            "Data analysis using NumPy & Pandas",
            "Descriptive and inferential statistics",
            "Hypothesis testing and A/B experimentation",
            "Practice with 20–25 Python coding problems",
          ],
        },
        
      ],
    },

    {
      title: "Module 2",
      subtitle: "SQL & Database Fundamentals",
      summary:
        "This module focuses on building strong SQL skills required for real-world data analysis and analytics interviews. Learners will work with databases to extract insights and analyze large datasets.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "SQL fundamentals and advanced querying techniques",
            "Joins, subqueries, CTEs, and window functions",
            "Writing optimized SQL queries for large datasets",
            "Practice with 40–50 interview-level SQL problems",
            "Business use cases including customer segmentation, revenue analysis, and cohort retention",
          ],
        },
       
      ],
    },

    {
      title: "Module 3",
      subtitle: "Data Manipulation with Pandas",
      summary:
        "This module focuses on cleaning, transforming, and preparing real-world datasets for analysis using Pandas.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Data cleaning and transformation techniques",
            "Handling missing values, duplicates, and outliers",
            "Merging, joining, and aggregating datasets",
            "Building analysis-ready datasets using Pandas",
            "Hands-on practice with sales and customer datasets",
          ],
        },
        
      ],
    },

    {
      title: "Module 4",
      subtitle: "Data Visualization, Excel & BI Tools",
      summary:
        "This module focuses on transforming data into meaningful insights using visualization and business intelligence tools.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Data visualization principles and storytelling",
            "Visualization using Matplotlib & Seaborn",
            "Advanced Excel dashboards for reporting",
            "Interactive dashboards using Tableau & Power BI",
            "Hands-on dashboard projects including Sales Dashboard, Customer Dashboard, and Executive Dashboard",
          ],
        },
        
      ],
    },

    {
      title: "Module 5",
      subtitle: "EDA, Business Analytics & Case Studies",
      summary:
        "This module helps learners develop a business-oriented analytical mindset using real-world case studies.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Exploratory Data Analysis (EDA) techniques",
            "KPI analysis for business decision-making",
            "Analyzing business metrics such as CAC, LTV, churn",
            "Solving real-world business case studies",
            "Case studies from e-commerce, marketing, and social domains",
          ],
        },
       
      ],
    },

    {
      title: "Module 6",
      subtitle: "DSA for Data Analytics",
      summary:
        "This module strengthens problem-solving skills required for analytics interviews.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Problem-solving techniques for analytics interviews",
            "Core DSA concepts including arrays, hashing, sorting",
            "Applying DSA for data manipulation",
            "Practice with 40–45 interview-relevant DSA problems",
            "Develop analytical thinking and logical reasoning",
          ],
        },
       
      ],
    },

    {
      title: "Module 7",
      subtitle: "Interview Preparation & Portfolio Building",
      summary:
        "This module prepares learners to become interview-ready data analysts by strengthening technical skills and building a strong portfolio.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Resume building tailored for Data Analyst roles",
            "Creating and optimizing a GitHub analytics portfolio",
            "Interview preparation covering SQL, Python, and statistics",
            "Case study interview preparation",
            "End-to-end analytics project development",
          ],
        },
       
      ],
    },

    {
      title: "Mini Program - Internship Details",
      subtitle: "1-Month Real-World Analytics Internship",
      summary:
        "This internship allows learners to apply analytics skills to real business datasets and gain industry experience.",
      content: [
        {
          heading: "What You'll Experience",
          text: [
            "Working with live datasets from real companies",
            "Solving real business analytics problems",
            "Performing end-to-end data analysis",
            "Presenting insights to stakeholders",
            "Solving additional SQL and Python problems",
          ],
        },
       
      ],
    },
  ],

 macro: [

  {
    title: "Module 0 - Course Summary",
    subtitle: "Course Summary",
    summary:
      "The Advanced Data Analytics Program is a comprehensive, 4-month industry-aligned course designed for learners aiming to build deep expertise in analytics and advance toward mid-level data analyst and data science roles. The program combines live instructor-led training, advanced real-world projects, and a 1-month industry internship to deliver hands-on experience with complex datasets and business problems.",
    content: [
      {
        heading: "Weekly Schedule",
        text: "10 hours per week (2 hours per day × 5 days)",
      },
      {
        heading: "Course Duration",
        text: "4 months (3 months of structured training + 1 month of internship)",
      },
      {
        heading: "Training Mode",
        text: "Live online classes combined with advanced projects and an industry internship",
      },
      {
        heading: "Certification",
        text: "Certificate of Completion in Advanced Data Analytics",
      },
    ],
  },

  {
    title: "Module 1",
    subtitle: "Python Programming & Advanced Statistics",
    summary:
      "This module builds strong analytical and statistical foundations required for advanced data analytics and data science roles. Learners will master Python for large-scale data manipulation and apply advanced statistical and probability concepts to solve real business problems with confidence.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Advanced Python programming for data analytics",
          "Data manipulation and analysis using Python",
          "Advanced statistics and probability concepts",
          "Designing and evaluating A/B tests with statistical rigor",
          "Practice with 40–50 interview-level Python problems",
        ],
      },
    ],
  },

  {
    title: "Module 2",
    subtitle: "Data Collection & Web Scraping",
    summary:
      "This module focuses on gathering data from real-world sources to support analytics and business decision-making. Learners will collect, process, and manage both structured and unstructured data using APIs, web scraping techniques, and automation while following ethical and scalable data practices.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Data collection from real-world sources",
          "Working with APIs, web scraping, and automation tools",
          "Handling structured and unstructured data",
          "Ethical, legal, and scalable data collection practices",
          "Hands-on practice with 10–12 real web scraping and API mini-projects",
          "Business use cases including market research, pricing analysis, and sentiment tracking",
        ],
      },
    ],
  },

  {
    title: "Module 3",
    subtitle: "NumPy & Advanced Pandas",
    summary:
      "This module focuses on handling large, complex, and messy datasets like a professional data analyst. Learners will apply advanced data cleaning, transformation, and feature engineering techniques while working with time-series data and multi-source integrations.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Advanced data manipulation using NumPy & Pandas",
          "Data cleaning, transformation, and feature engineering techniques",
          "Time-series analysis and handling temporal data",
          "Integrating and managing data from multiple sources",
          "Performance optimization for large-scale datasets",
          "Practice with 30–35 Pandas-focused problems",
          "Customer 360° data model project",
          "Time-series forecasting pipeline project",
          "Data quality assessment framework project",
        ],
      },
    ],
  },

  {
    title: "Module 4",
    subtitle: "SQL & Database Management",
    summary:
      "This module develops expert-level SQL skills required to work with large databases and complex analytical queries. Learners will focus on writing optimized, high-performance SQL queries and applying them to real-world business analytics scenarios.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Advanced SQL concepts for analytics",
          "Complex joins, subqueries, CTEs, and window functions",
          "Query optimization and performance tuning techniques",
          "Practice with 100–120 SQL problems across beginner to advanced levels",
          "Business analytics scenarios including cohort analysis, revenue attribution, and LTV modeling",
        ],
      },
    ],
  },

  {
    title: "Module 5",
    subtitle: "Data Visualization & BI Tools",
    summary:
      "This module focuses on transforming analytical insights into clear, compelling, and actionable stories for business stakeholders. Learners will create professional-grade visualizations and dashboards while applying storytelling principles tailored for executive audiences.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Data visualization principles and storytelling with data",
          "Creating visualizations using Matplotlib, Seaborn, and Plotly",
          "Building advanced dashboards with Tableau & Power BI",
          "Designing dashboards for executive and leadership audiences",
          "Executive KPI Dashboard project",
          "Customer & Marketing Analytics Dashboard project",
          "Product & Operations Dashboard project",
        ],
      },
    ],
  },

  {
    title: "Module 6",
    subtitle: "Machine Learning Fundamentals",
    summary:
      "This module enables learners to move from descriptive analytics to predictive analytics by applying machine learning techniques to real-world business problems. Learners will build, evaluate, and optimize models while understanding responsible and practical ML usage.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Introduction to machine learning for analytics",
          "Building and evaluating regression, classification, and clustering models",
          "Feature engineering and model optimization techniques",
          "Applying machine learning responsibly to business use cases",
          "Customer Churn Prediction project",
          "Price Prediction Models project",
          "Customer Segmentation project",
        ],
      },
    ],
  },

  {
    title: "Module 7",
    subtitle: "Excel & Business Analytics",
    summary:
      "This module focuses on mastering Excel as a powerful business analytics tool for real-world decision-making. Learners will apply advanced Excel techniques to analyze key business metrics and solve practical business problems across multiple domains.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Advanced Excel formulas and functions for analytics",
          "PivotTables, charts, and interactive dashboards",
          "Business metrics including CAC, LTV, churn, funnels, and cohort analysis",
          "A/B testing and scenario analysis using Excel",
          "Sales forecasting project",
          "Marketing ROI analysis project",
          "Inventory optimization project",
        ],
      },
    ],
  },

  {
    title: "Module 8",
    subtitle: "DSA for Data Analytics",
    summary:
      "This module strengthens analytical problem-solving and logical thinking required for data analytics technical interviews. Learners will focus on core DSA concepts that directly support efficient data manipulation and analytical reasoning.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Analytical problem-solving techniques for data analytics",
          "Core DSA concepts including arrays, hashing, and sorting",
          "Hierarchical and recursive data processing techniques",
          "Practice with 70–88 interview-relevant DSA problems",
        ],
      },
    ],
  },

  {
    title: "Module 9",
    subtitle: "Real-World Projects & Case Studies",
    summary:
      "This module focuses on applying data analytics end-to-end by working on real-world projects and case studies. Learners will integrate technical skills, business understanding, and storytelling to solve complex analytics problems and communicate insights effectively.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "End-to-end analytics project execution",
          "E-commerce analytics and market basket analysis",
          "Customer churn prediction and forecasting techniques",
          "Time-series forecasting and trend analysis projects",
          "Insight storytelling and presentation for non-technical stakeholders",
        ],
      },
    ],
  },

  {
    title: "Module 10",
    subtitle: "Interview Preparation & Portfolio Development",
    summary:
      "This module prepares learners for mid-level data analytics and data science roles by strengthening interview readiness, professional branding, and portfolio presentation. The focus is on showcasing advanced analytics skills through projects and structured interview preparation.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Interview preparation for mid-level analytics and data science roles",
          "Building a GitHub portfolio with 5–6 advanced analytics projects",
          "Technical interview preparation covering 150+ SQL and Python problems",
          "Case study interviews and business problem-solving frameworks",
          "Mock interview sessions and salary negotiation guidance",
        ],
      },
    ],
  },

  {
    title: "Macro Program - Internship Details",
    subtitle: "3-Month Industry Internship",
    summary:
      "This internship module provides learners with real analytics work and measurable business impact by working on live datasets from real companies. Learners will experience the complete analytics lifecycle—from problem definition to insight delivery—while collaborating in an industry-like environment.",
    content: [
      {
        heading: "Internship Experience",
        text: [
          "Working with live business datasets from real organizations",
          "End-to-end analytics lifecycle including data collection, analysis, modeling, and visualization",
          "Building dashboards, machine learning models, and business reports",
          "Presenting insights and recommendations to stakeholders",
          "Solving 30–40 additional SQL, Python, and analytics problems",
        ],
      },
      {
        heading: "Internship Outcomes",
        text: [
          "Production-ready analytics capstone project",
          "160–200 hours of industry experience",
          "Internship certificate with detailed project description",
          "370+ total interview-ready problems solved",
        ],
      },
    ],
  },

]

};

export default function Curriculum() {
  const [program, setProgram] = useState("mini");
  const [activeModule, setActiveModule] = useState(0);

  const modules = curriculumData[program];
  const current = modules[activeModule];

  return (
    <section className="bg-[#fff] py-14 md:py-20 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium">
          Course{" "}
          <span className="text-red-700 underline underline-offset-4">
            Curriculum
          </span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          A structured, industry-aligned curriculum designed to build strong
          full-stack skills
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-[340px]">
          <button
            onClick={() => {
              setProgram("mini");
              setActiveModule(0);
            }}
            className={`flex-1 py-2 text-sm md:text-base rounded-full transition ${
              program === "mini"
                ? "bg-white shadow font-medium"
                : "text-gray-600"
            }`}
          >
            Mini Program
          </button>

          <button
            onClick={() => {
              setProgram("macro");
              setActiveModule(0);
            }}
            className={`flex-1 py-2 text-sm md:text-base rounded-full transition ${
              program === "macro"
                ? "bg-white shadow font-medium"
                : "text-gray-600"
            }`}
          >
            Macro Program
          </button>
        </div>
      </div>

      {/* Main Layout */}
      {/* Desktop layout unchanged */}
      <div className="max-w-6xl mx-auto bg-red-50 p-4 md:p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* LEFT MODULE LIST */}
          <div className="space-y-2 overflow-x-auto md:overflow-visible flex md:block gap-2 md:gap-0">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setActiveModule(index)}
                className={`
                  cursor-pointer
                  p-3 md:p-4
                  rounded-lg
                  border-l-4
                  transition
                  min-w-[220px] md:min-w-0
                  ${
                    activeModule === index
                      ? "bg-white border-red-600 shadow"
                      : "border-transparent hover:bg-white"
                  }
                `}
              >
                <div className="font-medium text-sm">
                  {program === "mini" && index === 0 ? (
                    <>
                      Module 0 -{" "}
                      <span className="text-green-600">Mini Program</span>
                    </>
                  ) : (
                    module.title
                  )}
                </div>

                <div className="text-gray-500 text-sm">{module.subtitle}</div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl p-6 shadow">
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded">
                  <FileText className="text-red-600 w-5 h-5" />
                </div>

                <h3 className="text-lg font-semibold text-red-600">
                  {current.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-900 text-sm mb-8">{current.summary}</p>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {current.content.map((item, i) => (
                  <div key={i}>
                    <div className="font-medium text-xl"> {item.heading} :</div>
                    {current.content.map((section, i) => (
                      <div key={i} className="mt-4">
                        <h2 className="font-medium text-red-700">
                          {current.subtitle}
                        </h2>

                        <ul className="mt-2 space-y-2">
                          {(Array.isArray(section.text)
                            ? section.text
                            : [section.text]
                          ).map((item, index) => (
                            <li key={index} className="flex gap-2 text-sm">
                              <span className="text-red-600">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="text-gray-600 mt-8 text-sm ml-3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
