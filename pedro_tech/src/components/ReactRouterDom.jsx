import React, { createContext, useState } from 'react'
import Navigation from './forRRD/Navigation'
import Footer from './forRRD/Footer'
import Contact from './forRRD/Contact'
import About from './forRRD/About'
import HomePage from './forRRD/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const toData = createContext()

export default function ReactRouterDom() {
  const [name, setName] = useState('')

  const forNav = {
    home: 'Home',
    about: 'About',
    contact: 'Contact'
  }

  return (
    <toData.Provider value={{name, setName}}>
      <Router>  
          <Navigation forNav={forNav} />
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
          </Routes>
          <Footer forNav={forNav} />
      </Router>
    </toData.Provider>
  )
}
