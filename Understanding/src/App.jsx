import { useState } from 'react'
import './App.css'
import About from './components/About'
import Navigation from './components/Navigation'
import TextForm from './components/TextForm'
// import Alert from './components/Alert'
import ColorPlate from './components/ColorPlate'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Footer from './components/Footer'


function App() {
  const [mode, setMode] = useState('dark')
  const [invert, setInvert] = useState('light')
  // const [alert, setAlert] = useState(null)
  const [clrPlate, setClrPlate] = useState('warning')
  
  const toggleClr = (colorData) => {
        setClrPlate(colorData);
  }

  // const showAlert = (message, type, clrType) => {
  //     setAlert({
  //         message: message,
  //         type: type,
  //         clrType: clrType
  //     })
  //     setTimeout( e => {
  //         setAlert(null)
  //     }, 1500);
  // }

  const toggleMode = e => {
      if(mode === 'dark' && invert === 'light'){
        setMode('light')
        setInvert('dark')
        // showAlert('disabled', 'dark mode', 'danger')
      } else {
        setMode('dark')
        setInvert('light')
        // showAlert('enabled', 'dark mode', 'success')
      }
  }

  const navData = {
    navLogo: "SouravUL",
    home: "Home",
    about: "About",
    portfolio: "Portfolio"
  }

  return (
      <div id='wrapper'>

            
            <Navigation clrPlate={clrPlate} navData={navData} mode={mode} toggleMode={toggleMode} invert={invert}/>
            <ColorPlate clrPlate={clrPlate} toggleClr={toggleClr} mode={mode} invert={invert}/>
            {/* <Alert alert={alert} /> */}
            <Router>
              <Routes>
                  <Route exact path='/' element={<Home clrPlate={clrPlate} mode={mode} invert={invert} />}></Route>
                  <Route exact path='/textform' element={<TextForm clrPlate={clrPlate} mode={mode} invert={invert} />}></Route>
                  <Route exact path='/about' element={<About clrPlate={clrPlate} mode={mode} invert={invert} />}></Route>
              </Routes>
            </Router>
            <Footer clrPlate={clrPlate} mode={mode} invert={invert} navData={navData}/>


      </div>
  )
}

export default App
