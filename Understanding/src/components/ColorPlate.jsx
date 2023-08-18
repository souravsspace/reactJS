import React from 'react'

export default function ColorPlate(props) {
  return (
    <div className={`bg-${props.mode}`}>
        <div className="container">
        <div className={`d-flex bd-highlight bg-${props.mode}`}>
            <div className='ms-auto p-2'>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" onClick={() => props.toggleClr('primary')} className={`btn btn-outline-${props.clrPlate} text-primary`}>Blue</button>
                      <button type="button" onClick={() => props.toggleClr('secondary')} className={`btn btn-outline-${props.clrPlate} text-secondary`}>Gray</button>
                      <button type="button" onClick={() => props.toggleClr('success')} className={`btn btn-outline-${props.clrPlate} text-success`}>Green</button>
                      <button type="button" onClick={() => props.toggleClr('danger')} className={`btn btn-outline-${props.clrPlate} text-danger`}>Red</button>
                      <button type="button" onClick={() => props.toggleClr('warning')} className={`btn btn-outline-${props.clrPlate} text-warning`}>Gold</button>
                      <button type="button" onClick={() => props.toggleClr('info')} className={`btn btn-outline-${props.clrPlate} text-info`}>Cyna</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
