import { useEffect, useState } from 'react'

const Test = () => {
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    console.log('Component Mounted')
  }, []) // only when component mounts

  useEffect(() => {
    console.log(show)
    console.log('Component Updated')

    return () => {
      console.log('Component Unmounted')
    }
  }, [show, counter]) // only when `show`, `counter` changes

  return (
    <div>
      <h1>Test Component</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Test
