
// Mock data for the application
export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  lessons: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface Practice {
  id: string;
  title: string;
  description: string;
  questions: number;
  duration: number; // in minutes
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface Interview {
  id: string;
  title: string;
  description: string;
  type: "AI Simulation" | "Peer Interview" | "Expert Review";
  duration: number; // in minutes
  availableSlots: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

// Course data
export const courses: Course[] = [
  {
    id: "aptitude-101",
    title: "Aptitude Fundamentals",
    description: "Master the basics of quantitative aptitude and logical reasoning.",
    image: "/placeholder.svg",
    lessons: 12,
    duration: "4 hours",
    level: "Beginner"
  },
  {
    id: "tech-interview-prep",
    title: "Technical Interview Crash Course",
    description: "Prepare for technical questions with data structures and algorithms.",
    image: "/placeholder.svg",
    lessons: 18,
    duration: "8 hours",
    level: "Intermediate"
  },
  {
    id: "comm-skills",
    title: "Communication Excellence",
    description: "Develop verbal and non-verbal communication skills for interviews.",
    image: "/placeholder.svg",
    lessons: 8,
    duration: "3 hours",
    level: "Beginner"
  },
  {
    id: "system-design",
    title: "System Design for Interviews",
    description: "Learn how to approach and solve complex system design questions.",
    image: "/placeholder.svg",
    lessons: 15,
    duration: "6 hours",
    level: "Advanced"
  },
  {
    id: "behavioral-interview",
    title: "Mastering Behavioral Questions",
    description: "Techniques to answer behavioral and situational interview questions.",
    image: "/placeholder.svg",
    lessons: 10,
    duration: "3 hours",
    level: "Intermediate"
  },
  {
    id: "resume-building",
    title: "Resume & Portfolio Building",
    description: "Create a standout resume and portfolio to showcase your skills.",
    image: "/placeholder.svg",
    lessons: 7,
    duration: "2.5 hours",
    level: "Beginner"
  }
];

// Practice tests data
export const practiceTests: Practice[] = [
  {
    id: "quant-101",
    title: "Quantitative Aptitude Test",
    description: "Practice basic mathematical and logical reasoning problems.",
    questions: 25,
    duration: 30,
    difficulty: "Easy"
  },
  {
    id: "verbal-101",
    title: "Verbal Ability Assessment",
    description: "Test your vocabulary, grammar, and comprehension skills.",
    questions: 30,
    duration: 40,
    difficulty: "Medium"
  },
  {
    id: "coding-101",
    title: "Basic Coding Problems",
    description: "Solve fundamental coding problems with JavaScript or Python.",
    questions: 10,
    duration: 60,
    difficulty: "Medium"
  },
  {
    id: "adv-ds-algo",
    title: "Advanced Data Structures & Algorithms",
    description: "Complex problems testing your knowledge of advanced algorithms.",
    questions: 8,
    duration: 90,
    difficulty: "Hard"
  },
  {
    id: "mock-placement",
    title: "Mock Placement Aptitude Test",
    description: "Comprehensive test simulating actual placement assessments.",
    questions: 50,
    duration: 90,
    difficulty: "Hard"
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning Test",
    description: "Improve your logical thinking and problem-solving skills.",
    questions: 20,
    duration: 30,
    difficulty: "Medium"
  }
];

// Interview simulations data
export const interviews: Interview[] = [
  {
    id: "ai-basic",
    title: "AI-Powered Basic Interview",
    description: "Practice common interview questions with our AI interviewer.",
    type: "AI Simulation",
    duration: 20,
    availableSlots: 999
  },
  {
    id: "ai-technical",
    title: "Technical Interview Simulation",
    description: "AI-driven technical interview focusing on your skills and knowledge.",
    type: "AI Simulation",
    duration: 45,
    availableSlots: 999
  },
  {
    id: "peer-mock",
    title: "Peer Mock Interview",
    description: "Practice with other job seekers and exchange feedback.",
    type: "Peer Interview",
    duration: 60,
    availableSlots: 12
  },
  {
    id: "expert-hr",
    title: "HR Interview with Expert",
    description: "Get interviewed by an HR professional and receive valuable feedback.",
    type: "Expert Review",
    duration: 45,
    availableSlots: 5
  },
  {
    id: "expert-tech",
    title: "Technical Interview with Expert",
    description: "Practice with an industry expert in your technical domain.",
    type: "Expert Review",
    duration: 60,
    availableSlots: 3
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    testimonial: "JobPrep's technical interview simulations were incredibly close to my actual Google interview. I felt so much more prepared and confident.",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Microsoft",
    testimonial: "The aptitude practice tests and AI interview simulator helped me refine my answers and approach. Definitely worth it!",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Amazon",
    testimonial: "The behavioral interview preparation was spot on! I received great feedback from the expert review that helped me ace my final rounds.",
    image: "/placeholder.svg"
  }
];

// Learning paths
export const learningPaths = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Prepare for software engineering roles with focus on coding, system design, and technical interviews.",
    courses: ["tech-interview-prep", "system-design", "behavioral-interview"],
    tests: ["coding-101", "adv-ds-algo"],
    interviews: ["ai-technical", "expert-tech"]
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Build skills for data science and analytics roles focusing on quantitative aptitude and technical knowledge.",
    courses: ["aptitude-101", "tech-interview-prep", "system-design"],
    tests: ["quant-101", "adv-ds-algo"],
    interviews: ["ai-technical", "expert-tech"]
  },
  {
    id: "business",
    title: "Business & Management",
    description: "Prepare for business, consulting, and management roles with focus on communication and problem-solving.",
    courses: ["comm-skills", "behavioral-interview", "resume-building"],
    tests: ["verbal-101", "logical-reasoning"],
    interviews: ["ai-basic", "expert-hr"]
  }
];

// User progress data (would normally come from a database)
export const userProgress = {
  completedCourses: ["aptitude-101"],
  completedTests: ["quant-101", "verbal-101"],
  completedInterviews: ["ai-basic"],
  courseProgress: {
    "tech-interview-prep": 45, // percentage complete
    "comm-skills": 80,
    "behavioral-interview": 30
  }
};

// Get a course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

// Get a practice test by ID
export function getPracticeById(id: string): Practice | undefined {
  return practiceTests.find(test => test.id === id);
}

// Get an interview by ID
export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}

// Get a learning path by ID
export function getLearningPathById(id: string): any | undefined {
  return learningPaths.find(path => path.id === id);
}
