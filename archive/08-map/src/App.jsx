import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'

const textArray = ['Increment count', 'Count + 1', 'Increase', 'Add', 'One more']

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    // setCount(count + 1)
    setCount((prevState) => prevState + 1)
  }

  return (
    <div>
      <Counter count={count} />
      {textArray.map((text, index) => (
        <Button onClick={incrementCount} text={text} key={index} />
      ))}
    </div>
  )
}

export default App
