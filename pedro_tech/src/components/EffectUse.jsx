import React, { useEffect, useState } from 'react'

export default function EffectUse() {

  return (
    <div style={{height:'100vh', display:'grid', placeItems:'center'}}>
      <article style={{padding: '3rem', width:'40rem'}}>
            
      </article>
    </div>
  )
}







// resizing windowWidth 
const ResizeWidth = ()=> {
      const [windowWidth, setWindowWidth] = useState(window.innerWidth)

      const handleResize = ()=> {
          setWindowWidth(window.innerWidth)
      }
      useEffect(()=>{
          window.addEventListener('resize', handleResize)
          return (
            window.removeEventListener('resize', handleResize)
            )
      },[])
    return (
      {windowWidth}
    )
}


// fetching and modify json with useEffect()
const FetchModi = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resourceType])
  return (
  <>
      <div className='grid'>
          <button onClick={()=> setResourceType('posts')}>Posts</button>
          <button onClick={()=> setResourceType('users')}>Users</button>
          <button onClick={()=> setResourceType('comments')}>Comments</button>
      </div>
      <hgroup>
          <h4>The preview will show down below</h4>
      </hgroup>
      <h2>{resourceType}</h2>
      {items.map(item => {
        return JSON.stringify(item)
      })}

    </>
  )
}



// mount && updating && unmount
export const UseEf = ()=> {
  const [showText, setShowText] = useState(false)

  const toToggle = () => {
      setShowText(!showText)
  }
  useEffect(() => {
      console.log("components mounted")
      return (
        console.log("components unmounted")
      )
  }, [])
  return (
      <div>
        <button onClick={toToggle}>Show/Hide</button>
          {showText && <TextShow/>}
      </div>
  )
}

export const TextShow = ()=> {
  const [value, setValue] = useState('')
  return (
    <div>
        <input type="text" value={value} onChange={e=> setValue(e.target.value)} />
        <hgroup style={{width:'100%'}}>
            <h1>Preview</h1>
        </hgroup>
        <h4>{value}</h4>
    </div>
  )
}

