import './App.css'
import Navigation from './components/Navigation'
import HomeMain from './components/HomeMain'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const navNames = {
  Home:'Home',
  About:'About',
  Portfolio:'Portfolio',
  Contact:'Contact'
}

function App() {
  

  const handleTheme = ()=> { 
    const html = document.body.parentNode.classList
    if(html.value === 'data-light'){
      html.remove("data-light") 
      html.add("data-dark")
      localStorage.setItem('selectedTheme', 'data-dark')
    } else {
      html.remove("data-dark")
      html.add("data-light")
      localStorage.setItem('selectedTheme', 'data-light') 
    }
  }

  const selectedTheme = localStorage.getItem('selectedTheme')
  if(selectedTheme === 'data-dark'){
    const html = document.body.parentNode.classList
    html.remove("data-light") 
    html.add("data-dark")
  }


  return (
    <Router>
      <Navigation navNames={navNames} handleTheme={handleTheme} selectedTheme={selectedTheme} />
        <Routes>
          <Route exact path='/' element={<HomeMain  />} />
          <Route exact path='/portfolio' element={<Portfolio  />} />
          <Route exact path='/about' element={<About  />} />
          <Route exact path='/contact' element={<Contact  />} />
        </Routes>
        <Footer navNames={navNames}  />
    </Router> 
  )
}

export default App