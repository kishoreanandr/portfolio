import React from 'react'

export default function Footer(){
  return (
    <footer className="py-5 mt-5">
      <div className="container text-center">
        <div className="mb-2">&copy; {new Date().getFullYear()} Kishore Anand R</div>
        <div className="text-muted small">Crafted with React + Vite • Clean, fast and responsive</div>
      </div>
    </footer>
  )
}
