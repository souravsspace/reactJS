import { useState } from 'react'
import './App.css'
// import About from './components/About'
import Navigation from './components/Navigation'
import TextForm from './components/TextForm'
import Alert from './components/Alert'


function App() {
  const [mode, setMode] = useState('dark')
  const [invert, setInvert] = useState('light')
  const [alert, setAlert] = useState(null)
  

  const showAlert = (message, type, clrType) => {
      setAlert({
          message: message,
          type: type,
          clrType: clrType
      })
      setTimeout( e => {
          setAlert(null)
      }, 1000);
  }

  const toggleMode = e => {
      if(mode === 'dark' && invert === 'light'){
        setMode('light')
        setInvert('dark')
        showAlert('disabled', 'dark mode', 'danger')
      } else {
        setMode('dark')
        setInvert('light')
        showAlert('enabled', 'dark mode', 'success')
      }
  }
  
  // const alertProps = {
  //   title: "Hey Sourav",
  //   subtitle: "I am an alert!"
  // }

  return (
    <>
      <div id="wrapper">

            <Navigation mode={mode} toggleMode={toggleMode} invert={invert}/>
            {/* <About mode={mode} invert={invert} /> */}
            <Alert alert={alert} />
            <TextForm mode={mode} invert={invert} showAlert={showAlert} />

      </div>
    </>
  )
}

export default App
