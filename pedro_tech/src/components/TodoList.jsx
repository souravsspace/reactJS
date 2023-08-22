import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


export default function TodoList() {
  const [value, setValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const addItems = () => {
    const items = {
        id: (todoList.length === 0) ? 1 : (todoList[todoList.length - 1].id + 1),
        itemName: value
    }
    setTodoList([...todoList, items])
    setValue('')
  }

  const removeItem = (id) => {
      const filteredItems = todoList.filter((item)=> item.id !== id)
      setTodoList(filteredItems)
  }
  
  return (
    <div style={{height:'100vh', display:'grid', placeItems:'center'}}>
        <article style={{padding: '3rem', width:'40rem'}}>
            <div className='grid'>
                <input 
                  type="text" 
                  value={value}
                  onChange={handleValue}
                  />
                <button onClick={addItems}>Add</button>
            </div>
            <div style={{marginBlockStart:'2rem'}}>
                <h3>Preview</h3>
                {todoList.map((item, key)=> {
                  return (
                    <ul key={key} style={{listStyleType:'none'}}>
                        <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            {item.itemName}
                            <RxCross2 
                              onClick={()=> removeItem(item.id)} 
                              style={{cursor:'pointer'}} 
                              /> 
                        </li>
                    </ul>
                  )
                })}
            </div>
        </article>
    </div>
  )
}


