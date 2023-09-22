import { useReducer, useState } from "react"
import RenderTodo from "../components/RenderTodoCP"

type Todo = {
  id: number
  name: string
  complete: boolean
}

const initState: Todo[] = []

export const enum REDUCER_ACTION_TYPE {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: { name: string; id?: number }
}

function reducer(
  todo: typeof initState,
  action: ReducerAction
): typeof initState {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TODO:
      return [...todo, newTodo(action.payload!.name)]
    case REDUCER_ACTION_TYPE.TOGGLE_TODO:
      return todo.map((item) => {
        if (item.id === action.payload?.id) {
          return { ...item, complete: !item.complete }
        }
        return item
      })
    case REDUCER_ACTION_TYPE.DELETE_TODO:
      return todo.filter((item) => {
        return item.id !== action.payload?.id
      })

    default:
      return todo
  }
}

function newTodo(name: string) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  }
}

export default function UseReducer() {
  const [todo, dispatch] = useReducer(reducer, initState)

  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_TODO,
      payload: { name: value },
    })
    setValue("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
        {todo.map((item, index) => (
          <RenderTodo key={index} {...item} dispatch={dispatch} />
        ))}
      </div>
    </>
  )
}
