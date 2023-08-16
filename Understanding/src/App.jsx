import { useState } from 'react'
import './App.css'
import About from './components/About'
import Navigation from './components/Navigation'
import TextForm from './components/TextForm'


function App() {
  const [mode, setMode] = useState('dark')
  const [invert, setInvert] = useState('light')

  const toggleMode = e => {
      if(mode === 'dark' && invert === 'light'){
        setMode('light')
        setInvert('dark')
      } else {
        setMode('dark')
        setInvert('light')
      }
  }


  return (
    <>
      <div id="wrapper">

            <Navigation mode={mode} toggleMode={toggleMode} invert={invert}/>
            <About mode={mode} invert={invert} />
            <TextForm mode={mode} invert={invert} />

      </div>
    </>
  )
}

export default App
