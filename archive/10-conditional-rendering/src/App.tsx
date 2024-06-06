import { useState } from 'react'
import Counter from './components/Counter.tsx'
import Button from './components/Button.tsx'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <Counter count={count} />
      <Button onClick={incrementCount} text="Increment" />
      {!!count && <Button onClick={resetCount} text="Reset" />}
    </div>
  )
}

export default App
