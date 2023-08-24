import React, { useState } from 'react'
import UsersData from './UsersData'

export default function StateUse() {
  return (
    <>
      <ToExcrcise />
      {/* <DataSheet /> */}
    </>
  )
}


// map() and useState()
const DataSheet = () => {
  const [value, setValue] = useState('!user.areYouSad')
  const [color, setColor] = useState('white')
  
  const toggleValue = () => {
      setValue(value) // wrong one
      // setValue(!value) // right one
      color === 'white' ? setColor('teal') : setColor('white') 
  }
  const usersData = UsersData()

  return (
    <main style={{margin: '2rem'}}>
        <button onClick={toggleValue}>Show/Hide</button>
        {usersData.map((user, key)=> (
            <div key={key}>
              <section>
                {value && 
                  <div>
                      <hgroup>
                        <h1 style={{ color:  color}}>{user.fullName}</h1>
                        <h4>{user.ip_address}</h4>
                      </hgroup>
                      <article>
                          <hgroup>
                          <h2>{user.email}</h2>
                          <h4>{user.phone}</h4>
                          </hgroup>
                          <h5>{user.btcAddress}</h5>
                      </article>
                  </div>}
              </section>
            </div>
        ))}
    </main>
  )
}



// exercise
const ToExcrcise = ()=> {
        const [count, setCount] = useState(0)
        // const callCountFunction = ()=> {
        //   console.log('i am an useState!')
        //   return 0
        // }

        // const [count, setCount] = useState((()=> callCountFunction()))
        // const [count, setCount] = useState(()=> {
        //   console.log('i am an useState!')
        //   return 0
        // })
        // const [count, setCount] = useState(()=> callCountFunction())

        
        // const [state, setState] = useState({count: 19, name: 'sourav'})
        // const count = state.count
        // const name = state.name

        // const forIncrease = () => {
        //   setState(prevState => {
        //       return {...state, count: prevState.count + 1}
        //   })
        // }
        const forDecrease = () => setCount(count - 1)
        const forIncrease = () => setColor(count + 1)
        const setToZero = () => setCount(0)
  
        // const forIncreaseDub = () => {
        //   setCount(previousCount => previousCount + 1)
        //   setCount(previousCount => previousCount + 1)}
        // const forDecreaseDub = () => {
        //   setCount(previousCount => previousCount - 1)
        //   setCount(previousCount => previousCount - 1)}

    return (
        <div className='container'>
            <article>
                <div className='grid'>
                  <button onClick={forIncrease}>Increase</button>
                  <button onClick={forDecrease}>Decrease</button>
                  <button onClick={setToZero}>Set to zero</button>
                    {/* <button onClick={forIncreaseDub}>Increase</button>
                    <button onClick={forDecreaseDub}>Decrease</button> */}
                </div>
                <h3>
                    Result : 
                    {count}
                    {/* {state.count} {state.name} */}
                </h3>
            </article>
        </div>
    )
}
