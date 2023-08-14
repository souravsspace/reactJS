import { useState } from 'react'
import './App.css'



export default function App(){
    const [newValue, setNewValue] = useState('')
    const [todos, setTodos] = useState([])

    function toggleTodo(id, completed){
          setTodos(currentTodos => {
            return currentTodos.map(todo => {
              if(todo.id === id){
                  return {...todo, completed}
              }
              return todo
            })
          })
    }

    function submitValue(e){
      e.preventDefault()
      
      setTodos((currentTodos)=> {
        return [
          ...currentTodos, {id: crypto.randomUUID,  title: newValue, completed: false}
        ]
      })
      setNewValue('')
    }

    return (
      <>
        <div className='Wrapper'>
            <form onSubmit={submitValue}>
              <div className="formRow">
                  <label htmlFor="inputItems">Add items</label>
                  <input 
                    value={newValue}
                    onChange={(e)=> setNewValue(e.target.value)}
                    type="text" id='inputItems'
                  />
                  <button>Add</button>
              </div>
            </form>
            <div className="output">
                <h1>To~Do List</h1>
                <ul className='todoList'>
                  {todos.map(todo => {
                    return (
                      <li key={todo.id}>
                        <label>
                            <input type="checkbox" 
                            checked={todo.completed}
                            onChange={e => {
                                toggleTodo(todo.id,e.target.checked)
                            }}
                            />
                            {todo.title}
                        </label>
                        <a>x</a>
                      </li>
                    )
                  })}
                </ul>
            </div>
        </div>
      </>
    )
}
