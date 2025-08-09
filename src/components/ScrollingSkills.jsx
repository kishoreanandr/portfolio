import React from 'react'
import { skills } from '../data'
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt,
  FaReact, FaBootstrap, FaCode, FaServer, FaLaptopCode, FaCogs
} from 'react-icons/fa'
import { 
  SiSpringboot, SiMongodb, SiIntellijidea, SiPostman,
  SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiMysql, SiDocker
} from 'react-icons/si'

export default function ScrollingSkills() {
  // Map skills to their corresponding icons
  const skillIcons = {
    "Java": <FaJava />,
    "Python": <FaPython />,
    "HTML": <FaHtml5 />,
    "CSS": <FaCss3Alt />,
    "MySQL": <FaDatabase />,
    "MongoDB": <SiMongodb />,
    "Git": <FaGitAlt />,
    "React.js": <FaReact />,
    "Spring Boot": <SiSpringboot />,
    "Bootstrap": <FaBootstrap />,
    "Node.js": <SiNodedotjs />,
    "Express": <SiExpress />,
    "VS Code": <FaCode />,
    "IntelliJ IDEA": <SiIntellijidea />,
    "Postman": <SiPostman />,
    "OOPs": <FaCogs />,
    "Data Structures & Algorithms": <FaLaptopCode />,
    "REST APIs": <FaServer />,
    "JWT Authentication": <FaCode />
  }

  const allSkills = [
    ...skills.Languages,
    ...skills.Frameworks,
    ...skills.Platforms,
    ...skills.Concepts
  ]

  // Create multiple copies for seamless infinite looping
  const skillsForLoop = [
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills
  ]

  return (
    <div className="scrolling-skills">
      <div className="fade-left" />
      <div className="fade-right" />
      <div className="container">
        <div className="skills-container">
          {skillsForLoop.map((skill, index) => (
            <div key={index} className="scrolling-skill-item">
              <span className="skill-icon">{skillIcons[skill] || <FaCode />}</span>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 