import { useCallback, useEffect, useState } from 'react'

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('Виклик функції handleClick')
    setCount((prevState) => prevState + 1)
  }, [])

  useEffect(() => {
    console.log('handleClick перестворено')
  }, [handleClick])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default OptimizedComponent
