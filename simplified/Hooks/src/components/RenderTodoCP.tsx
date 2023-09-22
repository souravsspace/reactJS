import { REDUCER_ACTION_TYPE } from "../hooks/UseReducer"

interface RenderTodoProps {
  id: number
  name: string
  complete: boolean
  dispatch: React.Dispatch<any>
}

export default function RenderTodo({
  id,
  name,
  complete,
  dispatch,
}: RenderTodoProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
      }}
    >
      <p style={{ fontSize: "2rem", color: complete ? "green" : "" }}>{name}</p>
      <button
        onClick={() =>
          dispatch({
            type: REDUCER_ACTION_TYPE.TOGGLE_TODO,
            payload: { id: id, name: "" },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({
            type: REDUCER_ACTION_TYPE.DELETE_TODO,
            payload: { id: id, name: "" },
          })
        }}
      >
        Delete
      </button>
    </div>
  )
}
