import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchExcuser() {
  const [excuse, setExcuse] = useState('')

  useEffect(()=>{
    fetchExcuse('funny')
  },[])

  const fetchExcuse = (excuse)=> {
      axios
          .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
          .then(res => setExcuse(res.data[0]))
          .catch(error => alert(error))
  }

  return (
    <div style={{height:'100vh', display:'grid', placeItems:'center'}}>
          <article style={{padding: '3rem', width:'40rem'}}>
                <section className='grid'>
                    <button onClick={()=> fetchExcuse('family')}>Family</button>
                    <button onClick={()=> fetchExcuse('office')}>Office</button>
                    <button onClick={()=> fetchExcuse('college')}>College</button>
                    <button onClick={()=> fetchExcuse('party')}>Party</button>
                </section>
                <section>
                    <hgroup>
                        <h1 style={{textTransform:'capitalize'}}>{excuse.category}</h1>
                        <h4>{excuse.excuse || 'Generated Excuse - '}</h4>
                    </hgroup>
                </section>
          </article>
    </div>
  )
}
