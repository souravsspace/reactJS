import { FormEventHandler, useEffect, useReducer, useState } from "react"
import RenderTodoCPPractice from "../components/RenderTodoCPPractice"

type Todo = {
  id: number
  name: string | null
  complete: boolean
}

const getLocalItems = () => {
  const todos = localStorage.getItem("todos")
  if (todos) return JSON.parse(todos)
  return []
}

const initState: Todo[] = getLocalItems()

export const enum REDUCER_ACTION_TYPE {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_TODO,
  EDIT_TODO,
}

type ActionType = {
  type: REDUCER_ACTION_TYPE
  payload?: {
    value?: string
    id?: number
  }
}

function reducer(
  state: typeof initState,
  action: ActionType
): typeof initState {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TODO:
      return [...state, newTodo(action.payload?.value || "")]
    case REDUCER_ACTION_TYPE.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload!.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case REDUCER_ACTION_TYPE.DELETE_TODO:
      return state.filter((todo) => {
        if (todo.id !== action.payload!.id) {
          return todo
        }
        return null
      })
    case REDUCER_ACTION_TYPE.CLEAR_TODO:
      return []
    case REDUCER_ACTION_TYPE.EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload!.id) {
          return { ...todo, name: prompt("Enter new todo name") }
        }
        return todo
      })
    default:
      return state
  }
}

const newTodo = (value: string): Todo => {
  return {
    id: Date.now(),
    name: value,
    complete: false,
  }
}

export default function UseReducerPractice() {
  const [value, setValue] = useState("")
  const [todos, dispatch] = useReducer(reducer, initState)

  const handleSubmit: FormEventHandler<HTMLFormElement> = function (e) {
    e.preventDefault()
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_TODO,
      payload: { value: value },
    })
    setValue("")
  }

  const handleCLear = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.CLEAR_TODO,
      payload: {},
    })
    localStorage.removeItem("todos")
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [value])

  return (
    <div>
      <div style={{ display: "flex", gap: "10em" }}>
        <h3>UseReducer Practice</h3>
        <button onClick={handleCLear} style={{ flex: "1" }}>
          Clear
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type anything... and press enter"
        />
      </form>

      {todos.map((todo) => (
        <RenderTodoCPPractice key={todo.id} {...todo} dispatch={dispatch} />
      ))}
    </div>
  )
}
