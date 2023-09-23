import { Button, Input, Typography } from "@material-tailwind/react"
import { useEffect, useRef, useState } from "react"
import useTodoApp, { REDUCER_ACTION_TYPE } from "./useReducer/useTodoApp"
import TodoItems from "./components/TodoItems"

export default function App() {
  const [todos, dispatch] = useTodoApp()

  const [value, setValue] = useState("")
  const searchRef = useRef<HTMLInputElement>(null)

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_TODO,
      payload: {
        value: value,
      },
    })
    setValue("")
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const localStorageItems = JSON.parse(localStorage.getItem("todos") || "[]")

  const handleClear = () => {
    localStorage.removeItem("todos")
    dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_TODO, payload: { value: "" } })
  }

  return (
    <div className="flex justify-center items-center flex-col gap-4 m-5">
      <Typography variant="h2">Todo App</Typography>
      <div className="w-screen px-5 ">
        <Input
          ref={searchRef}
          color="blue"
          label="Search"
          crossOrigin={undefined}
        />
      </div>
      <form onSubmit={handleForm} className="w-screen px-5">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          color="blue"
          label="Add todo"
          crossOrigin={undefined}
        />
      </form>
      <ul className="flex w-full flex-col gap-4">
        <div className="flex justify-between items-center">
          <Typography variant="h3">Preview</Typography>
          <Button onClick={handleClear}>Clear</Button>
        </div>
        {localStorageItems.map((todo) => (
          <TodoItems key={todo.id} {...todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  )
}
