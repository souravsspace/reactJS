import React, { useState } from 'react'
import { BiAdjust } from 'react-icons/bi'
import { PiAlignRightBold } from "react-icons/pi";
import { FiActivity, FiAlertTriangle } from "react-icons/fi";

export default function ThemeSwitcher(props) {

  const [themeHideShow, setthemeHideShow] = useState('d-none')
  const selectTheme = (e) => {
      if(themeHideShow === 'd-none'){
        setthemeHideShow('d-block')
      } else {
        setthemeHideShow('d-none')
      }
  }

  return (
    <div className={`bg-${props.mode}`}>
          <div className={`pointer text-${props.invert}`}>
              <div className='container'>
                  <div 
                      className={`bg-${props.invert} text-${props.mode}  rounded-3 d-flex gap-2 align-items-center justify-content-center position-absolute bottom-0 end-0 me-5 mb-5`}>
                      <div className={`${themeHideShow} d-flex gap-2 align-items-center justify-content-center`}>
                          <FiActivity 
                              className='fs-3 mx-2 my-1' 
                              onClick={props.toggleMode} 
                          />
                          <FiAlertTriangle
                          className='fs-3'
                              onClick={()=> props.toggleClr('info')} 
                          />
                      </div>
                      <PiAlignRightBold
                          className='mx-2 my-1 fs-1' 
                          onClick={selectTheme} 
                      /> 
                  </div>
              </div>
          </div>
    </div>
  )
}

{/* <button type="button" onClick={() => props.toggleClr('primary')} className={`btn btn-outline-${props.clrPlate} text-primary`}>Blue</button>
<button type="button" onClick={() => props.toggleClr('secondary')} className={`btn btn-outline-${props.clrPlate} text-secondary`}>Gray</button>
<button type="button" onClick={() => props.toggleClr('success')} className={`btn btn-outline-${props.clrPlate} text-success`}>Green</button>
<button type="button" onClick={() => props.toggleClr('danger')} className={`btn btn-outline-${props.clrPlate} text-danger`}>Red</button>
<button type="button" onClick={() => props.toggleClr('warning')} className={`btn btn-outline-${props.clrPlate} text-warning`}>Gold</button>
<button type="button" onClick={() => props.toggleClr('info')} className={`btn btn-outline-${props.clrPlate} text-info`}>Cyna</button> */}