import { useState } from 'react'
import './App.css'
import {Home} from './pages/Home/Home'
import {About} from './pages/About/About'
import {Contact} from './pages/Contact/Contact'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
   <Router>
      
      <main style={{ padding: "20px" }}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
