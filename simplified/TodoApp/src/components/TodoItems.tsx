import { Button, Checkbox, Typography } from "@material-tailwind/react"
import { ACTION_TYPE, REDUCER_ACTION_TYPE } from "../useReducer/useTodoApp"

type TodoItemsProps = {
  id: number
  completed: boolean
  title: string | number
  dispatch: React.Dispatch<ACTION_TYPE>
}

export default function TodoItems({
  id,
  completed,
  title,
  dispatch,
}: TodoItemsProps) {
  const handleDone = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.DONE_TODO,
      payload: {
        id: id,
        value: "",
      },
    })
  }

  const handleDelete = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.DEL_TODO,
      payload: {
        id: id,
        value: "",
      },
    })
  }

  return (
    <li className="flex justify-between">
      <div className="flex gap-1 justify-center items-center">
        <Checkbox
          checked={completed}
          onClick={handleDone}
          id="checkbox"
          color="green"
          crossOrigin={undefined}
        />
        <label htmlFor="checkbox">
          <Typography>{title}</Typography>
        </label>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <Button onClick={handleDelete} color="red">
          del
        </Button>
        <Button onClick={handleDone} color="green">
          done
        </Button>
      </div>
    </li>
  )
}
