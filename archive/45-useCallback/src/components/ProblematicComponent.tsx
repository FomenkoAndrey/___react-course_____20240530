import { useEffect, useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('Виклик функції handleClick')
    setCount(count + 1)
  }

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

export default ProblematicComponent
