import { useReducer } from "react"

const initState = { count: 0, text: "" }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECRIMENT,
  NEW_TEXT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: string
}

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECRIMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_TEXT:
      return { ...state, text: action.payload ?? "" }
    default:
      return state
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  }
  const decriment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECRIMENT })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_TEXT,
      payload: e.target.value,
    })
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
        <button onClick={decriment}>-</button>
        <h1>{state.count}</h1>
        <button onClick={increment}>+</button>
      </div>
      <input type="text" onChange={handleChange} />
      <p>{state.text}</p>
    </div>
  )
}
