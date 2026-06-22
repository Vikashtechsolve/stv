import CourseSuccessStoriesCarousel from "../../../component/courses/CourseSuccessStoriesCarousel";

const stories = [
  {
    id: 1,
    name: "Tanvi Goyal",
    role: "Junior Full Stack Developer",
    qualification: "B.Tech CSE, Jaipur",
    text: "The Mini Program was exactly what I needed to start my tech career. In just a few months, I went from basic HTML and CSS to building full-stack MERN projects with confidence.",
  },
  {
    id: 2,
    name: "Yash Choudhary",
    role: "Frontend Developer",
    qualification: "BCA Student, Patna",
    text: "I had zero backend knowledge before joining VTS. The structured learning, live projects, and internship helped me understand real-world development and crack my first interview.",
  },
  {
    id: 3,
    name: "Shruti Bansal",
    role: "MERN Stack Learner",
    qualification: "MCA Student, Surat",
    text: "What stood out was the advanced curriculum and mentorship. From scalable backend systems to real-time features, everything was covered in a practical, project-first way.",
  },
  {
    id: 4,
    name: "Rahul Saini",
    role: "Backend Developer",
    qualification: "Final Year IT, Chandigarh",
    text: "The Node.js and database modules were the turning point for me. Building REST APIs and deploying projects gave me portfolio pieces recruiters actually asked about.",
  },
  {
    id: 5,
    name: "Muskan Dwivedi",
    role: "Full Stack Developer",
    qualification: "B.Sc CS, Indore",
    text: "The internship-style projects helped me connect frontend, backend, and deployment. I finally understood how a complete web application comes together in production.",
  },
  {
    id: 6,
    name: "Gaurav Mittal",
    role: "Frontend Engineer",
    qualification: "Diploma in IT, Ludhiana",
    text: "Starting as a beginner, I gained hands-on experience through projects and mentor feedback. The mock interviews prepared me well for real hiring processes.",
  },
];

export default function SuccessStories(){
  return (
    <CourseSuccessStoriesCarousel
      stories={stories}
      subtitle="See how VTS learners transformed their skills into strong full-stack portfolios"
    />
  );
}
