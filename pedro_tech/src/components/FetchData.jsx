import axios  from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [catFact, setCatFact] = useState('')
  
    useEffect(()=>{
        showCatFact();
    },[])
  
    const showCatFact = ()=> {
      axios
        .get('https://catfact.ninja/fact')
        .then(res => {
          setCatFact(res.data.fact)
          console.log(res.data.fact)
        })
        .catch(error => console.log(error))
    }
  return (
    <div style={{height:'100vh', display:'grid', placeItems:'center'}}>
      <article style={{padding: '3rem', width:'40rem'}}>
          <div className='grid'>
              <hgroup>
                <h1>Preview</h1>
                <h4>Generate facts about cats</h4>
              </hgroup>
              <button onClick={showCatFact}>Cat fact</button>
          </div>
          <div>
            <p>{catFact}</p>
          </div>
      </article>
    </div>
  )
}
