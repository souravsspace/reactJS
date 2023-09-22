import { REDUCER_ACTION_TYPE } from "../hooks/UseReducerPractice"

type RenderTodoCPPracticeProps = {
  id: number
  name: string
  complete: boolean
  dispatch: React.Dispatch<any>
}

export default function RenderTodoCPPractice({
  id,
  name,
  complete,
  dispatch,
}: RenderTodoCPPracticeProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5em",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {"-->"}
      <span
        style={{
          color: complete ? "tomato" : "",
          textDecoration: complete ? "lineThrough" : "",
          flex: "1",
        }}
      >
        {name}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: REDUCER_ACTION_TYPE.TOGGLE_TODO,
            payload: { id: id },
          })
        }
        style={{ flex: "1" }}
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: REDUCER_ACTION_TYPE.DELETE_TODO,
            payload: { id: id },
          })
        }
        style={{ flex: "1" }}
      >
        Delete
      </button>
    </div>
  )
}
