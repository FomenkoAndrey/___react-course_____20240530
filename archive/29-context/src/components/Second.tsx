import { useContext, useEffect } from 'react'
import { SecondContext } from '../App.tsx'

const Second = () => {
  const { secondValue, setSecondValue } = useContext(SecondContext)

  useEffect(() => {
    setSecondValue('Second value from Second.tsx')
  }, [setSecondValue])

  return (
    <div>
      <h2 style={{ color: 'red' }}>Second: {secondValue}</h2>
    </div>
  )
}

export default Second
