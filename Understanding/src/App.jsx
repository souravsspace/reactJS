import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import TextForm from './components/TextForm'
import ThemeSwitcher from './components/ThemeSwitcher'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const randomColor = ()=> {
      const colors = ['primary', 'secondary', 'success' ,'danger', 'warning', 'info']
      const randomNumber = Math.floor(Math.random() * colors.length)

      return colors[randomNumber]
}




function App() {

      const [mode, setMode] = useState('dark')
      const [invert, setInvert] = useState('light')
      const [clrPlate, setClrPlate] = useState(randomColor)

      const toggleClr = () => {
            setClrPlate(randomColor)
      }
      


      const toggleMode = () => {
            if(mode === 'dark' && invert === 'light'){
                  setMode('light')
                  setInvert('dark')
            } else {
                  setMode('dark') 
                  setInvert('light')

            }
      }


      const navData = {
            navLogo: "SouravUL",
            home: "Home",
            about: "About",
            portfolio: "Portfolio"
      }

return (
      <Router>

            <Navigation 
                  clrPlate={clrPlate} 
                  navData={navData} 
                  mode={mode} 
                  invert={invert}
            />
            <Routes>
                  <Route exact path='*' element={
                        <Home 
                              clrPlate={clrPlate} 
                              mode={mode} 
                              invert={invert} 
                        />}></Route>
                  <Route exact path='/' element={
                        <Home 
                              clrPlate={clrPlate} 
                              mode={mode} 
                              invert={invert} 
                        />}></Route>
                  <Route exact path='/textform' element={
                        <TextForm 
                              clrPlate={clrPlate} 
                              mode={mode} 
                              invert={invert} 
                        />}></Route>
                  <Route exact path='/about' element={
                        <About 
                              clrPlate={clrPlate} 
                              mode={mode} 
                              invert={invert} 
                              />}></Route>
            </Routes>
            <ThemeSwitcher 
                  clrPlate={clrPlate} 
                  mode={mode} 
                  invert={invert} 
                  toggleMode={toggleMode}
                  toggleClr={toggleClr} 
            />
            <Footer 
                  clrPlate={clrPlate} 
                  mode={mode} 
                  invert={invert} 
                  navData={navData}
            />
            
      </Router>
)
}

export default App
