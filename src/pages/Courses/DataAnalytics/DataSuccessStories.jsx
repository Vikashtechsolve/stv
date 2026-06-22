import CourseSuccessStoriesCarousel from "../../../component/courses/CourseSuccessStoriesCarousel";

const stories = [
  {
    id: 1,
    name: "Simran Kohli",
    role: "Junior Data Analyst",
    qualification: "B.Sc Statistics, Amritsar",
    text: "The Mini Program was exactly what I needed to start in analytics. In just a few months, I went from Excel basics to building dashboards and presenting insights with confidence.",
  },
  {
    id: 2,
    name: "Abhishek Rawat",
    role: "Business Analyst Learner",
    qualification: "B.Tech, Ranchi",
    text: "I had no SQL background before joining VTS. The structured learning and real datasets helped me understand how analytics works in actual business scenarios.",
  },
  {
    id: 3,
    name: "Neha Pandit",
    role: "Data Science Enthusiast",
    qualification: "MCA Student, Guwahati",
    text: "What stood out was the mentorship and hands-on projects. From data cleaning to visualization, every module connected directly to tasks analysts do on the job.",
  },
  {
    id: 4,
    name: "Lakshay Ahuja",
    role: "Analytics Intern",
    qualification: "Final Year BBA, Faridabad",
    text: "The Power BI and SQL projects became my strongest portfolio assets. Recruiters were impressed that I could walk through real business problems, not just theory.",
  },
  {
    id: 5,
    name: "Ritu Malviya",
    role: "Data Analyst Trainee",
    qualification: "B.Com + Analytics, Bhopal",
    text: "The business-focused approach helped me understand metrics like churn, LTV, and funnels. The internship experience gave me exposure to how analytics drives decisions.",
  },
  {
    id: 6,
    name: "Sanket Joshi",
    role: "BI Developer Learner",
    qualification: "Diploma in CS, Nashik",
    text: "Starting as a beginner, I gained hands-on experience with Python, SQL, and dashboards. Mentor feedback and mock interviews prepared me well for analyst roles.",
  },
];

export default function DataSuccessStories() {
  return (
    <CourseSuccessStoriesCarousel
      stories={stories}
      subtitle="See how VTS learners built analytics skills and job-ready portfolios"
      cardGradient="bg-[linear-gradient(180deg,#E6F1FB_0%,#FFFFFF_100%)]"
      accentBorder="border-blue-50/80"
      footerBorder="border-blue-100/80"
      heading={
        <>
          Learner{" "}
          <span className="text-red-700 underline underline-offset-4 relative sm:-top-1 lg:-top-3">
            Success Stories
          </span>
        </>
      }
    />
  );
}
