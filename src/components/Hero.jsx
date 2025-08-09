import React from 'react'
import { personal } from '../data'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import resume from '../assets/resume.pdf'

export default function Hero(){
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-6 col-md-12" data-aos="fade-right">
            <div className="open-to-work mb-3">Open to Work: SDE • Full‑Stack • Backend</div>
            <h1 className="text-gradient display-4 fw-bold mb-3">{personal.name}</h1>
            <p className="lead mb-3">{personal.tagline}</p>
            <p className="hire-note mb-4">Actively seeking opportunities in software engineering. I love building reliable backends and polished UIs. Let’s collaborate.</p>
            <div className="d-flex gap-3 mb-4">
              <a className="btn btn-outline-light" href="#contact">Contact Me</a>
              <a className="btn btn-teal" href={resume} target="_blank" rel="noreferrer" download>
                <FaDownload className="me-2" />
                Download Resume
              </a>
            </div>
            <div className="d-flex gap-3 social-icons">
              <a href={personal.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={personal.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={personal.social.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 text-center" data-aos="zoom-in">
            <div className="profile-wrap shadow-glow mx-auto">
              <img src={personal.photo} alt="profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
