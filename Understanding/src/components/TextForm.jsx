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

    const convertText = e => {
      document.getElementById('upperCase').textContent = txt.toUpperCase()
      document.getElementById('lowerCase').textContent = txt.toLowerCase()
      document.getElementById('reverse').textContent = txt.split('').reverse('').join('')
      const totalWords = document.getElementById('totalWords').textContent = txt.split(' ').length < 1 ? 0 : txt.split(' ').length
      document.getElementById('totalNumbers').textContent = txt.length
      document.getElementById('timeToRead').textContent = 'Around' + ' ' + totalWords*60*0.008 + ' ' + 'seconds'
      // ((totalWords.length > 125) ? (0.008 * totalWords + 'MIN' : 0.008 * totalWords * 60))
      // props.showAlert('convert', 'done', 'success')
    }
    const clearAll = e => {
      document.getElementById('upperCase').textContent = ''
      document.getElementById('lowerCase').textContent = ''
      document.getElementById('reverse').textContent = ''
      document.getElementById('totalWords').textContent = ''
      document.getElementById('totalNumbers').textContent = ''
      document.getElementById('timeToRead').textContent = ''
      formatTxt('')
      // props.showAlert('clear', 'done', 'danger')
    }

    // const copyText = e => {
    //       const inputBox = document.getElementById('inputBox')
    //       inputBox.select('')
    //       navigator.clipboard.write(inputBox.value)
    // }

    return (
    <div className={`bg-${props.mode} p-5`}>
      <h1 className={`text-${props.invert}`}>{props.heading}</h1>
      {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
      <textarea className={`form-control bg-${props.mode} text-${props.invert}`} value={txt} onChange={e=> formatTxt(e.target.value)} id="inputBox" rows="8"></textarea>
      {/* <button className="btn btn-primary my-3" onClick={upperCase}>To UpperCase</button> */}
      
      <button className={`btn btn-${props.clrPlate} my-3`} onClick={convertText}>Convert</button>
      <button className={`btn btn-${props.clrPlate} my-3 mx-3`} onClick={clearAll}>Clear</button>
      {/* <button className="btn btn-primary my-3" onClick={copyText}>Copy Text</button> */}

      
      <div className='mt-3'>
        <h1 className={`text-${props.invert}`}>{props.footer}</h1>
          <p className={`text-${props.clrPlate} mt5`}>Words : <span className={`text-${props.invert}`} id='totalWords'></span></p>
          <p className={`text-${props.clrPlate}`}>Characters : <span className={`text-${props.invert}`} id='totalNumbers'></span></p>
          <p className={`text-${props.clrPlate}`}>UpperCase : <span className={`text-${props.invert}`} id='upperCase'></span></p>
          <p className={`text-${props.clrPlate}`}>LowerCase : <span className={`text-${props.invert}`} id='lowerCase'></span></p>
          <p className={`text-${props.clrPlate}`}>Reverse : <span className={`text-${props.invert}`} id='reverse'></span></p>
          <p className={`text-${props.clrPlate}`}>Time to read : <span className={`text-${props.invert}`} id='timeToRead'></span></p>
        

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
  footer: "Text summary",
}

TextForm.propsTypes = {
  heading: PropTypes.string,
  footer: PropTypes.string
}
