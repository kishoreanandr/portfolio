import React from 'react'
import { about, personal, achievements } from '../data'
export default function About(){
  return (
    <div className="py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center" data-aos="fade-up">
          <img src={personal.photo} alt="profile" className="about-photo" />
        </div>
        <div className="col-md-8" data-aos="fade-left">
          <h2 className="text-gradient">{about.heading}</h2>
          <p className="lead">{about.content}</p>

          <div className="mt-4">
            <h5 className="text-gradient">Selected Achievements</h5>
            <div className="achievements-list">
              {achievements.map((a,i)=>(
                <div key={i} className="achievement-item">
                  <div className="achievement-header">
                    <strong>{a.title}</strong>
                    <small className="text-muted">{a.date}</small>
                  </div>
                  <div className="achievement-detail">{a.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
