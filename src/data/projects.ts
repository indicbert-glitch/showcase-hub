export interface Project {
  id: string;
  title: string;
  problem: string;
  team: string;
  srs: string;
  website: string;
  video: string;
}

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Smart Evaluation System",
    problem: "An AI-based system to evaluate student answers automatically using NLP, reducing manual grading effort and providing instant, consistent feedback to learners.",
    team: "Team Alpha",
    srs: "https://drive.google.com/file/d/sample1",
    website: "https://smart-eval.example.com",
    video: "https://youtube.com/watch?v=sample1",
  },
  {
    id: "2",
    title: "Talking Campus Guide",
    problem: "A voice-enabled campus navigation assistant that helps students and visitors find buildings, classrooms, and facilities through natural conversation.",
    team: "Swarnima Sanwal & Team",
    srs: "https://drive.google.com/file/d/sample2",
    website: "https://talking-campus.example.com",
    video: "https://youtube.com/watch?v=sample2",
  },
  {
    id: "3",
    title: "Tree Tracker",
    problem: "A geo-tagging platform to monitor planted trees on campus, track growth, and engage students in sustainability initiatives with gamified rewards.",
    team: "Keshav Yadav Group",
    srs: "https://drive.google.com/file/d/sample3",
    website: "https://tree-tracker.example.com",
    video: "https://youtube.com/watch?v=sample3",
  },
  {
    id: "4",
    title: "Event Management Gateway",
    problem: "Centralized portal for creating, registering, and managing campus events with QR-based attendance and automated certificate generation.",
    team: "Sumit Kumar & Vikky Giri",
    srs: "https://drive.google.com/file/d/sample4",
    website: "https://events.example.com",
    video: "https://youtube.com/watch?v=sample4",
  },
  {
    id: "5",
    title: "Mess Management System",
    problem: "Digitized mess operations including menu planning, attendance, feedback collection, and waste analytics to improve cafeteria efficiency.",
    team: "Hemant Gautam & Ayush Patel",
    srs: "https://drive.google.com/file/d/sample5",
    website: "https://mess.example.com",
    video: "https://youtube.com/watch?v=sample5",
  },
  {
    id: "6",
    title: "Web-Based Notes Manager",
    problem: "Collaborative note-taking platform with rich text editing, tagging, sharing, and version history designed specifically for student workflows.",
    team: "Nikunj Bhardwaj Group",
    srs: "https://drive.google.com/file/d/sample6",
    website: "https://notes.example.com",
    video: "https://youtube.com/watch?v=sample6",
  },
  {
    id: "7",
    title: "Student DevOps Platform",
    problem: "An end-to-end DevOps learning environment where students can deploy projects, run CI/CD pipelines, and monitor applications in real time.",
    team: "Arya Suprerak Miglani",
    srs: "https://drive.google.com/file/d/sample7",
    website: "https://devpulse.example.com",
    video: "https://youtube.com/watch?v=sample7",
  },
  {
    id: "8",
    title: "Campus Kart",
    problem: "Peer-to-peer marketplace for students to buy, sell, and exchange books, electronics, and essentials within a verified campus community.",
    team: "Himanshu Yadav & Ansh Tiwari",
    srs: "https://drive.google.com/file/d/sample8",
    website: "https://campuskart.example.com",
    video: "https://youtube.com/watch?v=sample8",
  },
  {
    id: "9",
    title: "University Identity Manager",
    problem: "Single sign-on identity management system for students and faculty to access all university services with a unified, secure credential.",
    team: "Divyansh Bhandari",
    srs: "https://drive.google.com/file/d/sample9",
    website: "https://identity.example.com",
    video: "https://youtube.com/watch?v=sample9",
  },
  {
    id: "10",
    title: "Gym Membership Portal",
    problem: "Streamlined gym registration, slot booking, and workout tracking system for university fitness centers with progress dashboards.",
    team: "Priyanshu & Krishna Patel",
    srs: "https://drive.google.com/file/d/sample10",
    website: "https://gym.example.com",
    video: "https://youtube.com/watch?v=sample10",
  },
  {
    id: "11",
    title: "Exam Seat Management",
    problem: "Automated exam seat allocation system that generates conflict-free seating arrangements across halls based on subjects and student counts.",
    team: "Vivek Kumar & Luv Chaudhary",
    srs: "https://drive.google.com/file/d/sample11",
    website: "https://examseat.example.com",
    video: "https://youtube.com/watch?v=sample11",
  },
  {
    id: "12",
    title: "Faculty Room Manager",
    problem: "Real-time room and resource booking platform for faculty to reserve meeting rooms, projectors, and shared spaces without conflicts.",
    team: "Aditya Raj & Kshitiz Gautam",
    srs: "https://drive.google.com/file/d/sample12",
    website: "https://facrooms.example.com",
    video: "https://youtube.com/watch?v=sample12",
  },
];
