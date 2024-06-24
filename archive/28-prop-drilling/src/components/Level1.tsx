import { LevelPropInterface } from './LevelProp.interface.ts'
import Level2 from './Level2.tsx'

const Level1 = ({ value }: LevelPropInterface) => {
  return (
    <div>
      <h2>Level 1: {value}</h2>
      <Level2 value={value} />
    </div>
  )
}

export default Level1
