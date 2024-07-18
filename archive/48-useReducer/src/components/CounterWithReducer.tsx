import { useReducer } from 'react'

interface State {
  count: number
}

interface Action {
  type: string
}

const initialState: State = { count: 0 }

const COUNTER_INCREMENT: string = 'COUNTER_INCREMENT'
const COUNTER_DECREMENT: string = 'COUNT_DECREMENT'
const COUNTER_RESET: string = 'COUNTER_RESET: string'

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { count: state.count + 1 }
    case COUNTER_DECREMENT:
      return { count: state.count - 1 }
    case COUNTER_RESET:
      return initialState
    default:
      throw new Error('Unexpected action')
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncrement = () => dispatch({ type: COUNTER_INCREMENT })
  const handleDecrement = () => dispatch({ type: COUNTER_DECREMENT })
  const handleReset = () => dispatch({ type: COUNTER_RESET })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterWithReducer
