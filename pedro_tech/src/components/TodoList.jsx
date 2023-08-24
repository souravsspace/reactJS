import React, { useState } from 'react'
import { RxCross2, RxCheckCircled } from "react-icons/rx";

export default function TodoList() {
  const [value, setValue] = useState('')
  const [todoItems, setTodoItems] = useState([])

  const addItems = ()=> {
    const items = {
      id: todoItems.length === 0 ? 1 : todoItems[todoItems.length - 1].id + 1,
      name: value,
      isHide: false
    }
    setTodoItems([...todoItems, items])
    setValue('')
  }

  const removeItems = (id) => {
    const filteredItems = todoItems.filter((item)=> item.id !== id)
    setTodoItems(filteredItems)
  }

  const compeletedHandle = (id)=> {
    setTodoItems(
      todoItems.map((item)=> {
          if(item.id === id){
            return {...item, isHide: true}
          } else {
            return item
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
                  value={value}
                  onChange={e=> setValue(e.target.value)}
                  />
                <button onClick={addItems}>Add</button>
            </div>
            <div style={{marginBlockStart:'2rem'}}>
                <h3>Preview</h3>
                {todoItems.map((item, key)=> (
                    <ul key={key}>
                        <li style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            {item.name}
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <RxCheckCircled
                                    style={{marginInlineEnd:'1.5rem', cursor:'pointer', color: item.isHide === true ? 'green' : 'white'}}
                                    onClick={()=> compeletedHandle(item.id)}
                                    />
                                <RxCross2 
                                    style={{color:'tomato', cursor:'pointer'}}
                                    onClick={()=> removeItems(item.id)}
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
