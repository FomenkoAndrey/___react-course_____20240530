import { useContext } from 'react'
import { PropContext, SecondContext } from '../App.tsx'

const Level3 = () => {
  const { value } = useContext(PropContext)
  const { secondValue, setSecondValue } = useContext(SecondContext)

  const handleChange = () => {
    setSecondValue(secondValue === 'New second value' ? 'Another value for second' : 'New second value')
  }

  return (
    <div>
      <h3>Level 3: {value}</h3>
      <h3>Level 3, SecondContext: {secondValue}</h3>
      <button onClick={handleChange}>Змінити secondValue</button>
    </div>
  )
}

export default Level3
