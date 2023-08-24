import axios  from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchDataTwo() {
  const [input, setInput] = useState('')
  const [forAge, setForAge] = useState('')

  const getData = (e)=> {
      e.preventDefault()
      axios
        .get(`https://api.agify.io/?name=${input}`)
        .then(res=> setForAge(res.data))
      setInput('')
  }

  return (
    <div style={{height:'100vh', display:'grid', placeItems:'center'}}>
      <article style={{padding: '3rem', width:'40rem'}}>
          <form className='grid'>
              <input 
                  type="text" placeholder='Enter name'
                  value={input} onChange={e=> setInput(e.target.value)} 
                  required/>
              <button onClick={getData}>See Age</button>
          </form>
          <hgroup>
              <h1>Preview</h1>
              <h4>Name : {forAge.name}, Age : {forAge.age}, Count : {forAge.count}</h4>
          </hgroup>
      </article>
    </div>
  )
}
