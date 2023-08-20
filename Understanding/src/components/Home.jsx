import React from 'react'

export default function Home(props) {
  return (
    <>
      
      <section className={`conatiner bg-${props.mode}`}>
          <div className="container d-flex align-items-center flex-column flex-lg-row justify-content-center" style={{minHeight:'87vh'}}>
              <div className='container '>
                  <h1 className={`text-${props.invert}`}>Responsive left-aligned hero with image</h1>
                  <p className={`text-${props.invert}`}>Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div>
                    <button className={`btn btn-${props.clrPlate} me-2`} type='button'>Primary</button>
                    <button className={`btn text-${props.invert} btn-outline-${props.clrPlate}`} type='button'>Default </button>
                  </div>
              </div>
              <div>
                  <img className='card-img' src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" />
              </div>
          </div>
      </section>

    </>
  )
}
