import { useState } from 'react'
import randomizer from '../utils/randomizer.js'

const Random = ({ min, max }) => {
  const [num, setNum] = useState(randomizer(min, max))

  const changeNum = () => {
    setNum(randomizer(min, max))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNum}>Generate Random</button>
    </div>
  )
}

export default Random
