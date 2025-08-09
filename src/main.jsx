import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ duration: 800, once: true, mirror: false })

createRoot(document.getElementById('root')).render(<App />)
