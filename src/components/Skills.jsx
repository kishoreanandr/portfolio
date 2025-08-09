import React from 'react'
import { skills } from '../data'

function SkillGroup({title, items}){
  return (
    <div className="col-md-6 mb-4" data-aos="fade-up">
      <h6 className="mb-3 text-gradient">{title}</h6>
      <div className="d-flex flex-wrap gap-2">
        {items.map((s,i)=>(
          <span key={i} className="badge skill-badge">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <div className="py-5">
      <h2 className="mb-4 text-gradient">Skills</h2>
      <div className="row">
        <SkillGroup title="Languages" items={skills.Languages} />
        <SkillGroup title="Frameworks" items={skills.Frameworks} />
        <SkillGroup title="Platforms" items={skills.Platforms} />
        <SkillGroup title="Core Concepts" items={skills.Concepts} />
      </div>
    </div>
  )
}
