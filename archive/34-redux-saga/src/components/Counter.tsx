import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store.ts'
import { decrementAsync, incrementAsync } from '../redux/counterSlice.ts'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment in 1s</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement in 1s</button>
    </div>
  )
}

export default Counter
