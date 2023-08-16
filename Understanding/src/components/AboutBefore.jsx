import React, { useState } from 'react'

export default function About() {
  // const containerStyle = {
  //   minHeight: '95vh'
  // }

  const [isActive, setIsActive] = useState(true)
  const changeTheme = e => {
      setIsActive(current => !current)
      setBtnTxt('Dark')
  }

  const [btnTxt, setBtnTxt] = useState('Light')

  return (
    <div className= {isActive ? 'bg-dark bg-gradient text-dark cointainer p-5' : 'bg-light bg-gradient text-light cointainer p-5'}
    style={{height: '95vh'}}
    // style={containerStyle}
    >
          <h1 className={isActive ? 'text-light m-4' : 'text-dark m-4'}>About Us</h1>
          <div className="container accordion" id="accordionExample">
          <div className={isActive ? "bg-dark text-light accordion-item" : "bg-light text-dark accordion-item"}>
            <h2 className="accordion-header" id="headingOne">
              <button className={isActive ? "bg-dark text-light accordion-button" : "bg-light text-dark accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className={isActive ? "bg-dark text-light accordion-item" : "bg-light text-dark accordion-item"}> 
            <h2 className="accordion-header" id="headingTwo">
              <button className={isActive ? "bg-dark text-light accordion-button collapsed" : "bg-light text-dark accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className={isActive ? "bg-dark text-light accordion-item" : "bg-light text-dark accordion-item"}>
            <h2 className="accordion-header" id="headingThree">
              <button className={isActive ? "bg-dark text-light accordion-button collapsed" : "bg-light text-dark accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

        <button className={isActive ? "bg-light bg-gradient text-dark btn my-3 mx-3" : "bg-dark bg-gradient text-light btn my-3 mx-3"} onClick={changeTheme}>{btnTxt}</button>
    </div>
  )
}
export default function About() {
  // const containerStyle = {
  //   minHeight: '95vh'
  // }

  const [isActive, setIsActive] = useState(true)
  const changeTheme = e => {
      setIsActive(current => !current)
      setBtnTxt('Dark')
  }

  const [btnTxt, setBtnTxt] = useState('Light')

  return (
    <div className= {isActive ? 'bg-dark bg-gradient text-dark cointainer p-5' : 'bg-light bg-gradient text-light cointainer p-5'}
    style={{height: '95vh'}}
    // style={containerStyle}
    >
          <h1 className={isActive ? 'text-light m-4' : 'text-dark m-4'}>About Us</h1>
          <div className="container accordion" id="accordionExample">
          <div className={isActive ? "bg-dark text-light accordion-item" : "bg-light text-dark accordion-item"}>
            <h2 className="accordion-header" id="headingOne">
              <button className={isActive ? "bg-dark text-light accordion-button" : "bg-light text-dark accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className={isActive ? "bg-dark text-light accordion-item" : "bg-light text-dark accordion-item"}> 
            <h2 className="accordion-header" id="headingTwo">
              <button className={isActive ? "bg-dark text-light accordion-button collapsed" : "bg-light text-dark accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className={isActive ? "bg-dark text-light accordion-item" : "bg-light text-dark accordion-item"}>
            <h2 className="accordion-header" id="headingThree">
              <button className={isActive ? "bg-dark text-light accordion-button collapsed" : "bg-light text-dark accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

        <button className={isActive ? "bg-light bg-gradient text-dark btn my-3 mx-3" : "bg-dark bg-gradient text-light btn my-3 mx-3"} onClick={changeTheme}>{btnTxt}</button>
    </div>
  )
}
