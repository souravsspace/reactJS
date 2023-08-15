import './App.css'
import Navigation from './components/Navigation'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <div className="wrapper">

          <Navigation />
          <TextForm />
          
          { /* <Navigation navLogo="ReactJS" home="Home" testimonial="Testimonial" portfolio="Portfolio" /> */}
          
      </div>
    </>
  )
}

export default App
