import React, { useState } from "react";
import { FileText } from "lucide-react";

// ================= DATA STRUCTURE =================
// Just edit this to add modules/content

const curriculumData = {
  mini: [
    {
      title: "Module 0 - Mini Program",
      subtitle: "Course Summary",
      summary:
        "The Mini Full Stack MERN Development Program is a fast-track, 3-month course designed for learners who want to quickly build strong full-stack fundamentals. It includes live online training, hands-on projects, and a 1-month internship to help you gain real-world development experience and industry-ready skills.",
      content: [
        {
          heading: "Weekly Schedule",
          text: "10 hours per week (2 hours per day × 5 days)",
        },
        {
          heading: "Course Duration",
          text: "3 months (2 months training + 1 month internship)",
        },
        {
          heading: "Training Mode",
          text: "Live instructor-led classes + hands-on projects",
        },
        {
          heading: "Certification",
          text: "Certificate of Completion in Full Stack MERN",
        },
      ],
    },

    {
      title: "Module 1 ",
      subtitle: "JavaScript Core & Programming Fundamentals",
      summary:
        "This module builds a strong programming foundation using modern JavaScript. You’ll learn how to write clean, efficient logic and understand how JavaScript works behind the scenes, preparing you for advanced full-stack development.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Modern ES6+ JavaScript fundamentals and syntax",
            "Asynchronous programming (callbacks, promises, async/await)",
            "Writing clean and efficient logic using arrays, objects, and functions",
            "DOM manipulation for dynamic and interactive user interfaces",
          ],
        },
      ],
    },

    {
      title: "Module 2",
      subtitle: "HTML, CSS & Responsive Web Design",
      summary:"This module focuses on building visually appealing, responsive, and user-friendly websites. You’ll learn how to design modern interfaces using industry-standard tools and best practices for layout, responsiveness, and performance.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Semantic HTML5 structure and accessible form validation",
            "CSS3 fundamentals for styling modern web pages",
            "Professional layouts using Flexbox and CSS Grid",
            "Mobile-first responsive design using Tailwind CSS",
            "Smooth UI animations, transitions, and hover effects",
          ],
        },
      ],
    },

    {
      title: "Module 3",
      subtitle: "React.js Frontend Development",
      summary: "This module helps you build scalable and production-ready frontend applications using React. You’ll learn how modern user interfaces are structured, managed, and connected to real-time data in professional web products.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "React fundamentals and component-based architecture",
            "Working with React Hooks for state and lifecycle management",
            "State management, props, and component communication",
            "API integration for fetching and displaying live data",
            "Routing and navigation using React Router",
            "Building dynamic and interactive UIs used in real-world applications",
          ],
        },
      ],
    },

    {
      title: "Module 4",
      subtitle: "Backend Development with Node.js & MongoDB",
      summary: "This module focuses on building secure, scalable, and high-performance backend systems. You’ll learn how real-world applications handle data, authentication, and business logic using modern backend technologies.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Backend fundamentals using Node.js and Express.js",
            "Designing and building RESTful APIs",
            "MongoDB database management and data modeling with Mongoose",
            "JWT-based authentication and role-based access control",
            "Securing APIs using bcrypt, CORS, and environment configurations",
            "Structuring scalable backend architectures",
          ],
        },
      ],
    },

    {
      title: "Module 5",
      subtitle: "Data Structures & Algorithms (DSA)",
      summary: "This module is designed to strengthen your problem-solving skills and help you crack technical interviews. You’ll learn how to approach coding problems efficiently using proven patterns and optimization techniques used by top tech companies.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Big-O analysis and performance optimization techniques",
            "Mastery of core data structures including arrays, strings, and hashing",
            "Problem-solving using recursion and algorithmic thinking",
            "In-depth understanding of linked lists, stacks, queues, and trees",
            "Interview-proven DSA patterns and strategies",
            "Solve 80–90 curated LeetCode problems for hands-on practice",
          ],
        },
      ],
    },

    {
      title: "Module 6",
      subtitle: "Full-Stack Integration, Git & Deployment",
      summary: "This module brings everything together by helping you build, integrate, and deploy complete MERN stack applications. You’ll learn how real-world products are developed, versioned, and launched in production environments.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Integrating React frontend with Node.js and Express backend",
            "Implementing complete authentication flows and protected routes",
            "Git & GitHub workflows for version control and team collaboration",
            "Managing branches, pull requests, and code reviews",
            "Deploying applications on Vercel, Netlify, and Render",
            "Environment configuration for production-ready apps",
          ],
        },
      ],
    },

    {
      title: "Module 7",
      subtitle: "Interview Preparation & Career Readiness",
      summary: "This final module which  focuses on preparing you for real-world job interviews and professional environments. You’ll gain the confidence, skills, and strategies needed to successfully crack technical and behavioral interviews.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Technical interview preparation for JavaScript, React, Node.js, and MongoDB",
            "Common DSA interview patterns and mock coding rounds",
            "Resume building with ATS optimization",
            "GitHub portfolio enhancement with project best practices",
            "LinkedIn branding and professional profile optimization",
            "Behavioral interview preparation and communication skills",
          ],
        },
      ],
    },

    {
      title: "Mini Program - Internship Details ",
      subtitle: "1-Month Real-World Internship",
      summary: "This 1-month internship is designed to give you hands-on industry experience by working on real, production-grade MERN stack applications. You’ll apply everything you’ve learned in a professional development environment.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Work on production-ready MERN applications",
            "Participate in real code reviews and collaborative Git workflows",
            "Deploy applications in live production environments",
            "Exposure to Agile/Scrum methodologies and professional documentation",
            "Solve 50–60 additional DSA problems to strengthen problem-solving skills",
          ],
        },
      ],
    },
  ],

  macro: [
    {
      title: "Module 0 - Mini Program",
      subtitle: "Course Summary",
      summary: "The Advanced Full Stack MERN Development Macro Program is a comprehensive 6-month journey designed for learners aiming for strong industry readiness. It combines in-depth training, advanced projects, and a 2-month industry internship to help you gain real-world experience, master full-stack development, and prepare confidently for mid-level developer roles.",
      content: [
        {
          heading: "Weekly Schedule",
          text: "15 hours per week",
        },
        {
          heading: "Course Duration",
          text: "6 months + paid internship",
        },
      ],
    },

    {
      title: "Module 1",
      subtitle: "Programming Fundamentals & Advanced JavaScript",
      summary: "This module is designed to build a deep and advanced understanding of JavaScript from the ground up. You’ll master both core and advanced concepts required to write optimized, production-ready code used in real-world full-stack applications.",
      summary:
        "This module builds a strong programming foundation using modern JavaScript. You’ll learn how to write clean, efficient logic and understand how JavaScript works behind the scenes, preparing you for advanced full-stack development.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Core to advanced JavaScript (ES6+) concepts",
            "Asynchronous programming using promises and async/await",
            "Closures, scope, and execution context in depth",
            "Understanding this keyword, prototypes, and inheritance",
            "Object-Oriented Programming (OOP) in JavaScript",
            "Writing clean, optimized, and production-ready code",
            "Solve 50–60 structured coding problems for strong logical foundations",
          ],
        },
      ],
    },

    {
      title: "Module 2",
      subtitle: "HTML 5 & CSS 3 Mastery",
      summary: "This module focuses on building professional, scalable, and modern user interfaces used in real-world products. You’ll master advanced layout techniques, responsive design principles, and UI best practices to create polished, production-grade web experiences.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Semantic HTML5 structure with accessibility best practices",
            "Advanced form handling and validation",
            "Building complex layouts using Flexbox and CSS Grid",
            "Mobile-first responsive design techniques",
            "UI animations, transitions, and interactions",
            "Tailwind CSS customization, theming, and dark mode implementation",
          ],
        },
      ],
    },

    {
      title: "Module 3",
      subtitle: "Git, GitHub & Development Workflow",
      summary: "This module prepares you to work like a professional developer in real-world teams. You’ll learn how modern development workflows function, collaborate effectively, and manage codebases using industry-standard tools and practices.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Git fundamentals and version control best practices",
            "Industry-standard GitHub workflows",
            "Branching strategies for team-based development",
            "Creating and managing pull requests (PRs)",
            "Conducting and responding to code reviews",
            "Preparing for open-source contributions",
            "GitHub portfolio optimization for recruiters",
          ],
        },
      ],
    },

    {
      title: "Module 4",
      subtitle: "React.js Complete",
      summary: "This module takes you deep into React to help you build scalable, high-performance frontend applications. You’ll learn advanced patterns, optimization techniques, and architecture practices used in production-level React projects.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "React fundamentals with advanced Hooks usage",
            "Context API for state sharing and global state management",
            "React Router v6 for complex routing and navigation",
            "Creating and using custom hooks",
            "Performance optimization using memoization techniques",
            "Advanced component design and architecture patterns",
          ],
        },
      ],
    },

    {
      title: "Module 5",
      subtitle: "State Management & Advanced React",
      summary: "This module focuses on managing complex application state and building scalable frontend architectures. You’ll learn advanced state management techniques required for large-scale, production-ready React applications.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Advanced usage of the Context API for global state management",
            "Redux Toolkit for scalable and maintainable state architecture",
            "Handling asynchronous state and API-driven data flows",
            "Best practices for API integration in large applications",
            "Scalable component structuring and styling patterns",
            "Performance considerations for state-heavy applications",
          ],
        },
      ],
    },

    {
      title: "Module 6",
      subtitle: "Node.js & Backend Fundamentals",
      summary: "This module helps you deeply understand how backend systems work beyond just using frameworks. You’ll explore Node.js internals, asynchronous patterns, and architectural concepts essential for building scalable backend applications.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Core Node.js fundamentals and runtime architecture",
            "Understanding the event loop and async execution model",
            "Working with asynchronous patterns and non-blocking I/O",
            "File systems, streams, and CLI tools in Node.js",
            "Backend architecture principles for scalable systems",
            "Writing efficient and maintainable backend code",
          ],
        },
      ],
    },

    {
      title: "Module 7",
      subtitle: "Express.js & RESTful APIs",
      summary: "This module focuses on building secure, scalable, and well-documented RESTful APIs using Express.js. You’ll learn how real-world backend systems handle requests, validation, security, and data flow.  ",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Complete Express.js framework and middleware architecture",
            "Designing and building RESTful APIs",
            "Input validation and centralized error handling",
            "Implementing API security best practices",
            "Swagger documentation for API contracts",
            "API testing and debugging workflows",
          ],
        },
      ],
    },

    {
      title: "Module 8",
      subtitle: "MongoDB & Mongoose",
      summary: "This module focuses on designing efficient, scalable, and production-ready databases. You’ll learn how to model real-world data, optimize performance, and manage complex relationships using MongoDB and Mongoose.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "MongoDB fundamentals including CRUD operations",
            "Advanced queries using aggregation pipelines",
            "Indexing strategies for performance optimization",
            "Schema design and managing data relationships with Mongoose",
            "Query tuning and database performance optimization",
            "Best practices for scalable data modeling",
          ],
        },
      ],
    },

    {
      title: "Module 9",
      subtitle: "Authentication, Authorization & Security",
      summary: "This module focuses on implementing enterprise-grade security in modern web applications. You’ll learn how to protect applications, manage user access, and follow industry security standards used in real-world systems.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Secure authentication flows using JWT",
            "Role-Based Access Control (RBAC) for user permissions",
            "Implementing OAuth and social login integrations",
            "Web security best practices including XSS and CSRF protection",
            "Rate limiting and API abuse prevention techniques",
            "Secure handling of sensitive data and credentials",
          ],
        },
      ],
    },

    {
      title: "Module 10",
      subtitle: "Advanced Backend & Real-Time Features",
      summary: "This module takes your backend skills to an enterprise level by adding real-time and high-performance features. You’ll learn how to build live systems, optimize backend performance, and integrate cloud-based services used in modern applications.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Real-time communication using WebSockets & Socket.io",
            "Building live chat and notification systems",
            "Caching strategies for performance optimization",
            "Background jobs & task queues",
            "Application analytics and monitoring",
            "File uploads and storage handling",
            "Email services and cloud-based integrations",
          ],
        },
      ],
    },

    {
      title: "Module 11",
      subtitle: "Full-Stack Integration, Testing & Deployment",
      summary: "This final module focuses on transforming your applications into fully production-ready systems. You’ll integrate frontend and backend seamlessly, implement real-world authentication flows, ensure application quality through testing, and deploy scalable full-stack applications to the cloud.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "End-to-end frontend + backend integration",
            "API consumption, error handling & data flow management",
            "Complete authentication & authorization flows",
            "Application testing (unit, integration & basic E2E testing)",
            "CI/CD pipelines and automated deployments",
            "Cloud deployment, environment management & scalability",
          ],
        },
      ],
    },

    {
      title: "Module 12",
      subtitle: "Data Structures & Algorithms",
      summary: "This module is designed to build strong problem-solving skills and prepare you for real technical interviews. You’ll master DSA through a pattern-based approach, strengthen logical thinking, and consistently practice interview-level problems to gain confidence and speed.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Pattern-based Data Structures & Algorithms mastery",
            "Arrays, Strings, Hashing & Two-Pointer techniques",
            "Recursion, Backtracking & Sliding Window patterns",
            "Linked Lists, Stacks & Queues",
            "Trees, Binary Search Trees & Heaps",
            "Graphs, BFS/DFS & basic Dynamic Programming",
            "Solve 150–180 structured DSA problems during training",
          ],
        },
      ],
    },

    {
      title: "Module 13",
      subtitle: "Interview Prep & System Design Basics",
      summary: "This module prepares you for mid-level full-stack developer roles by combining deep interview preparation with system design fundamentals. You’ll practice real interview questions, understand scalable architecture concepts, and refine your resume and portfolio to confidently clear technical and behavioral rounds.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "175+ interview questions covering JavaScript, React, Backend & MERN stack",
            "Common frontend & backend interview patterns and scenarios",
            "System design fundamentals: scalability, load balancing & basic architecture",
            "Designing APIs & data flow for real-world applications",
            "Mock technical & behavioral interviews",
            "Resume building, GitHub & portfolio optimization",
          ],
        },
      ],
    },

    {
      title: "Module 14",
      subtitle: "2-Month Industry Internship",
      summary: "This intensive 2-month industry internship provides real enterprise-level development experience where you work as a professional full-stack developer. You’ll collaborate with agile teams, contribute to production-grade applications, and gain hands-on exposure to real deployments, code reviews, and scalable system development.",
      content: [
        {
          heading: "Topics Covered",
          text: [
            "Working on production-grade enterprise applications",
            "Agile/Scrum workflow with daily stand-ups & sprint planning",
            "Code reviews, version control & team collaboration",
            "Real-time features, payment integrations & admin dashboards",
            "Debugging, optimization & performance best practices",
            "Solving 80–100 additional DSA problems alongside project work",
          ],
        },
      ],
    },
  ],
};

export default function Curriculum() {
  const [program, setProgram] = useState("mini");
  const [activeModule, setActiveModule] = useState(0);

  const modules = curriculumData[program];
  const current = modules[activeModule];

  return (
    <section className="bg-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium">
          Course{" "}
          <span className="text-red-700 underline underline-offset-4 relative -top-3">
            Curriculum
          </span>
        </h2>

        <p className="text-gray-600 mt-3">
          A structured, industry-aligned curriculum designed to build strong
          full-stack skills step-by-step
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-200 rounded-full p-1 flex w-[340px]">
          <button
            onClick={() => {
              setProgram("mini");
              setActiveModule(0);
            }}
            className={`flex-1 py-2 rounded-full transition ${
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
            className={`flex-1 py-2 rounded-full transition ${
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
      <div className="max-w-6xl mx-auto bg-red-50 p-6 rounded-xl">
        <div className="grid grid-cols-3 gap-6">
          {/* LEFT MODULE LIST */}
          <div className="space-y-2">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setActiveModule(index)}
                className={`
                  cursor-pointer
                  p-4
                  rounded-lg
                  border-l-4
                  transition
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

                    <div className="text-gray-600 mt-8 text-sm ml-3">
                      
                    </div>
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
