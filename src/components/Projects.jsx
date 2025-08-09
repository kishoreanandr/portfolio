import React from 'react'
import { projects } from '../data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects(){
  return (
    <div className="py-5">
      <h2 className="mb-4 text-gradient">Projects</h2>
      <div className="row g-4">
        {projects.map((p, idx) => (
          <div className="col-md-6" key={idx} data-aos="fade-up">
            <div className="card project-card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <div>
                    {p.tech.map((t,i)=><span key={i} className="badge me-1 small">{t}</span>)}
                  </div>
                  <div className="d-flex gap-2">
                    {p.repo && <a className="btn btn-outline-primary btn-sm" href={p.repo} target="_blank" rel="noreferrer"><FaGithub /> Repo</a>}
                    {p.demo && <a className="btn btn-teal btn-sm" href={p.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live</a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
