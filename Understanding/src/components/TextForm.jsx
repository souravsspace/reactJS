import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    // const [count, setCount] = useState(0)
    const [txt, formatTxt] = useState('')

    // txt = "Hi im a text" // wrong way
    // formatTxt("Hi im a text") // right way

    // const upperCase = ()=> {
    //   // formatTxt(txt.toUpperCase())
    //   document.getElementById('output').textContent = txt.toUpperCase()
    //   formatTxt('')
    // }

    // const txtChange = (e)=> {
    //     formatTxt(e.target.value)
    // }

    return (
    <div className="container my-5 ">
      <h1>{props.heading}</h1>
      {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
      <textarea className="form-control" value={txt} onChange={e=> formatTxt(e.target.value)} id="myBox" rows="8"></textarea>
      {/* <button className="btn btn-primary my-3" onClick={upperCase}>To UpperCase</button> */}
      
      <button className="btn btn-primary my-3" 
      onClick={()=> {
        document.getElementById('upperCase').textContent = txt.toUpperCase()
        document.getElementById('lowerCase').textContent = txt.toLowerCase()
        document.getElementById('totalWords').textContent = txt.split(' ').length
        document.getElementById('totalNumbers').textContent = txt.length
        document.getElementById('timeToRead').textContent = 'Around ' + (0.008 * (txt.split(' ').length)) + ' minutes' 
        formatTxt('')
      }}>Convert</button>

      
      <div className='mt-3'>
        <h1>{props.footer}</h1>
          <p className="text-primary mt-5">Words : <span className='text-white' id='totalWords'></span></p>
          <p className="text-primary">Characters : <span className='text-white' id='totalNumbers'></span></p>
          <p className='text-primary'>UpperCase : <span className='text-white' id='upperCase'></span></p>
          <p className='text-primary'>LowerCase : <span className='text-white' id='lowerCase'></span></p>
          <p className='text-primary'>Time to read : <span className='text-white' id='timeToRead'></span></p>
        

        {/* <span className="text-primary">Words : </span>
        <span>{txt.split(' ').length}</span> <br/>
        <span className="text-primary">Characters : </span>
        <span>{txt.length}</span> <br/>
        <span className='text-primary'>Result : </span>
        <span id='output'></span> */}
      </div>

      {/* <button className="btn btn-primary my-3">To UpperCase <span>{count}</span>{onclick=( ()=> setCount(count + 1))}</button> */}
    </div>
  )
}

TextForm.defaultProps = {
  heading: "Enter the text..",
  footer: "Text summary"
}

TextForm.propsTypes = {
  heading: PropTypes.string,
  footer: PropTypes.string
}
