import profile from "./assets/profile.jpg"
import resume from "./assets/resume.pdf"
export const personal = {
  name: "Kishore Anand R",
  tagline: "Aspiring Developer • Java | Spring Boot | React.js | MySQL\nBuilding solutions that blend logic, performance, and design.",
  email: "kishoreanand.r@gmail.com",
  phone: "+91 6380679644",
  location: "India",
  photo: profile,
  social: {
    linkedin: "https://www.linkedin.com/in/kishoreanandr/",
    github: "https://github.com/kishoreanandr",
    leetcode: "https://leetcode.com/u/kishoreanand21/"
  }
}

export const about = {
  heading: "About Me",
  content: `I’m a passionate developer with a strong foundation in building scalable web applications and solving real-world problems. Skilled in Java, Spring Boot, and React.js. I enjoy turning ideas into reliable products with clean APIs and user‑friendly interfaces. I’m actively looking for roles such as Software Developer, Java Backend, or Full‑Stack Developer where I can contribute to real‑world impact and keep learning. Graduated from Kongu Engineering College (ECE) with a CGPA of 8.07 (2021-2025).`
}

export const skills = {
  Languages: ["Java", "Python", "HTML", "CSS", "MySQL", "MongoDB", "Git"],
  Frameworks: ["React.js", "Spring Boot", "Bootstrap"],
  Platforms: ["VS Code", "IntelliJ IDEA", "Postman"],
  Concepts: ["OOPs", "Data Structures & Algorithms", "REST APIs"]
}

export const projects = [
  {
    title: "Hybrid Optimization Model for Phishing Attack Detection",
    description: "Real-time phishing URL classification using hybrid Grey Wolf Optimization (GWO) and Genetic Algorithm (GA) for feature selection, reducing computational cost, and trained with a Random Forest classifier.",
    tech: ["Python", "ML", "GWO", "GA"],
    repo: "https://github.com/kishoreanandr/phishing_attack_detection.git",
    demo: "https://github.com/kishoreanandr/phishing_attack_detection.git"
  },
  {
    title: "Hostel Hub – Hostel Feedback",
    description: "Full-stack web app built with React.js & Spring Boot for students to submit hostel food reviews and complaints, with role-based access and email notifications.",
    tech: ["React.js", "Spring Boot", "MySQL", "JWT"],
    repo: "https://github.com/kishoreanandr/Hostel-Hub.git",
    demo: "https://github.com/kishoreanandr/Hostel-Hub.git"
  },
  {
    title: "Expense Tracker – Personal Finance Management",
    description: "Expense tracking web app with budgets, analytics dashboard, and AI-driven spending suggestions.",
    tech: ["React.js", "Spring Boot", "MySQL"],
    repo: "https://github.com/kishoreanandr/expense_tracker.git",
    demo: "https://github.com/kishoreanandr/expense_tracker.git"
  },
  {
    title: "AI Job Matcher Web Application",
    description: "AI-powered job matcher using resume parsing and LLaMA-based scoring to match candidates to job descriptions.",
    tech: ["React.js", "Flask", "LLaMA", "pdfplumber"],
    repo: "https://github.com/kishoreanandr/AI-JOB-MATCHER.git",
    demo: "https://github.com/kishoreanandr/AI-JOB-MATCHER.git"
  },
  {
    title: "IEEE Conference Paper Template",
    description: "Developed a standalone HTML/CSS template for IEEE conference paper submissions, ensuring proper formatting and styling compliance.",
    tech: ["HTML", "CSS"],
    repo: "https://github.com/kishoreanandr/ieee_website1",
    demo: "https://kishoreanandr.github.io/ieee_website1/"
  }
  
]

export const achievements = [
  { title: "Automatic Dress Code Verification — Vivere", date: "Feb 2023", detail: "First Prize: presented an automatic dress code detection idea at Kongu Engineering College." },
  { title: "LeetCode 50 Days Badge", date: "2024-2025", detail: "Earned for solving coding problems consistently over 50+ days."}
]

export const certifications = [
  { title: "React Certificate — HackerRank", link: "https://www.hackerrank.com/certificates/03bda52d9815" },
  { title: "Java Certificate — HackerRank", link: "https://www.hackerrank.com/certificates/787a698e6426" }
]
