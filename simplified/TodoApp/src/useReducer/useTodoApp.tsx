import { useReducer } from "react"

type Todo = {
  id: number
  title: string | number
  completed: boolean
}
const initValue: Todo[] = []

export const enum REDUCER_ACTION_TYPE {
  ADD_TODO,
  DONE_TODO,
  DEL_TODO,
  CLEAR_TODO,
}

export type ACTION_TYPE = {
  type: REDUCER_ACTION_TYPE
  payload: {
    value: string | number
    id?: number
  }
}

function reducer(
  todos: typeof initValue,
  action: ACTION_TYPE
): typeof initValue {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TODO:
      return [...todos, newTodo(action.payload!.value)]
    case REDUCER_ACTION_TYPE.DONE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload!.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case REDUCER_ACTION_TYPE.DEL_TODO:
      return todos.filter((todo) => todo.id !== action.payload!.id)
    case REDUCER_ACTION_TYPE.CLEAR_TODO:
      return []
    default:
      return todos
  }
}

function newTodo(value: string | number) {
  return {
    id: Date.now(),
    title: value,
    completed: false,
  }
}
export default function useTodoApp(): [
  typeof initValue,
  React.Dispatch<ACTION_TYPE>
] {
  const [todos, dispatch] = useReducer(reducer, initValue)
  return [todos, dispatch]
}
