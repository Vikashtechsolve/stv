import CourseSuccessStoriesCarousel from "../../../component/courses/CourseSuccessStoriesCarousel";

const stories = [
  {
    id: 1,
    name: "Nitin Bhardwaj",
    role: "Aspiring AI Developer",
    qualification: "Final Year CSE, Noida",
    text: "The Generative AI program gave me exactly the skills I needed. In just a few months, I went from basic Python to building full AI applications. The hands-on projects and mentor support strengthened my portfolio.",
  },
  {
    id: 2,
    name: "Ritika Saxena",
    role: "Prompt Engineering Learner",
    qualification: "MCA Student, Bhopal",
    text: "What stood out was the depth of the curriculum — from prompt engineering to AI agents. The capstone project became the highlight of my portfolio and helped me interview with confidence.",
  },
  {
    id: 3,
    name: "Manish Thakur",
    role: "LLM Enthusiast",
    qualification: "B.Tech IT, Dehradun",
    text: "I had no AI background before joining VTS. The structured learning path, live projects, and RAG modules helped me understand real-world AI development step by step.",
  },
  {
    id: 4,
    name: "Kavya Rastogi",
    role: "AI Engineer Trainee",
    qualification: "3rd Year B.Tech, Lucknow",
    text: "The AI APIs and RAG modules were incredibly practical. Building a document Q&A system during the course became my strongest portfolio piece for campus placements.",
  },
  {
    id: 5,
    name: "Devansh Mukherjee",
    role: "Full Stack AI Learner",
    qualification: "BCA Graduate, Kolkata",
    text: "The full-stack AI development track tied everything together. Learning to integrate LLMs with React and backend APIs gave me the confidence to build and deploy complete AI applications.",
  },
  {
    id: 6,
    name: "Akash Tripathi",
    role: "AI Automation Learner",
    qualification: "Diploma in CS, Varanasi",
    text: "Starting as a beginner, I gained hands-on experience building AI agents and automation workflows. The mentorship and mock interviews prepared me well for the job market.",
  },
];

export default function SuccessStories() {
  return (
    <CourseSuccessStoriesCarousel
      stories={stories}
      subtitle="See how VTS learners transformed their skills through the Generative AI program"
    />
  );
}
