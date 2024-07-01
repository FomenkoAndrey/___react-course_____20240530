import { useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/counterSlice.ts'
import { RootState, useAppDispatch } from '../redux/store.ts'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
