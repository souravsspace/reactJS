import React, { useState } from 'react'
import UsersData from './UsersData'

export default function StateUse() {
  return (
    <>
      <ToExcrcise />
      <DataSheet />
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

    const forIncrease = () => setCount(count + 1)
    const forDecrease = () => setCount(count - 1)
    const setToZero = () => setCount(0)

    return (
        <div className='container'>
            <article>
                <div className='grid'>
                    <button onClick={forIncrease}>Increase</button>
                    <button onClick={forDecrease}>Decrease</button>
                    <button onClick={setToZero}>Set to zero</button>
                </div>
                <h3>
                    Result : {count}
                </h3>
            </article>
        </div>
    )
}
