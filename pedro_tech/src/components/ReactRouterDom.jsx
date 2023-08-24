import React from 'react'
import Navigation from './forRRD/Navigation'
import Footer from './forRRD/Footer'
import Contact from './forRRD/Contact'
import About from './forRRD/About'
import HomePage from './forRRD/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function ReactRouterDom() {
  return (
    <Router>  
        <Navigation />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
    </Router>
  )
}
