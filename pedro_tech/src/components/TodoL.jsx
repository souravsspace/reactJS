import React, { useState } from 'react'
import { RxCross2, RxCheckCircled } from "react-icons/rx";

export default function TodoL() {
  const [input, setInput] = useState('')
  const [todoItems, setTodoItem] = useState([])

  const inputHandle = (e) => setInput(e.target.value)

  const addItems = () => {
    const items= {
      id: todoItems.length === 0 ? 1 : (todoItems[todoItems.length - 1].id + 1),
      value: input,
      complete: false
    }
    setTodoItem([...todoItems, items])
    setInput('')
  }

  const removeItems = (id) => {
      const filteredItems = todoItems.filter(item => item.id !== id)
      setTodoItem(filteredItems)
  }

  const completeToggle = (id) => {
      setTodoItem(
        todoItems.map(items => {
          if(items.id === id){
              return {...items, complete: true}
          } else {
            return items
          }
        })
      )
  }
  
  return (
    <div style={{height:'100vh', display:'grid', placeItems:'center'}}>
        <article style={{padding: '3rem', width:'40rem'}}>
            <div className='grid'>
                <input 
                  type="text"
                  value={input}
                  onChange={inputHandle}
                  />
                <button onClick={addItems}>Add</button>
            </div>
            <div style={{marginBlockStart:'2rem'}}>
                <h2>Preview</h2>
                {todoItems.map((item, key)=> (
                  <ul key={key}>
                      <li style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        {item.value}
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                          <RxCross2
                              style={{cursor:'pointer', marginInlineEnd:'1rem', color:'tomato'}}
                              onClick={()=> removeItems(item.id)}
                              />
                          <RxCheckCircled 
                              style={{cursor:'pointer', color: item.complete === true ? 'green' : 'white'}}
                              onClick={()=> completeToggle(item.id)}
                              />
                        </div>
                      </li>
                  </ul>
                ))}
            </div>
        </article>
    </div>
  )
}
