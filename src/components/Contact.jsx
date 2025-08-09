import React, { useState } from 'react'
import { personal } from '../data'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Send via FormSubmit (no permissions, no backend)
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}` , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'Portfolio Contact Form',
          _template: 'table',
        })
      })

      if (!response.ok) {
        throw new Error(`FormSubmit failed: ${response.status}`)
      }

      const result = await response.json()
      if (result.success !== 'true') {
        // Some browsers return boolean true; handle both
        if (result.success !== true) throw new Error('FormSubmit reported failure')
      }

      setSubmitStatus('success')
      setForm({name:'', email:'', message:''})

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-5">
      <h2 className="mb-4 text-gradient">Contact</h2>
      <div className="row">
        <div className="col-md-6" data-aos="fade-right">
          <div className="card contact-card h-100">
            <h5>Get in touch</h5>
            <p className="text-muted">Email or call to discuss opportunities or collaborations.</p>
            <p><FaEnvelope /> <a href={`mailto:${personal.email}`} className='mail-link'>{personal.email}</a></p>
            <p><FaPhone /> {personal.phone}</p>
            <div className="mt-4 d-flex flex-column gap-2">
              <a className="btn btn-outline-light" href={personal.social.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-outline-light" href={personal.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-outline-light" href={personal.social.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input 
                required 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="form-control"
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                required 
                name="email" 
                type="email" 
                value={form.email} 
                onChange={handleChange} 
                className="form-control"
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea 
                required 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                className="form-control" 
                rows="5"
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              className="btn btn-teal" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="alert alert-success mt-3">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-danger mt-3">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
