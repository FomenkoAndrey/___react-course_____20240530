import { LevelPropInterface } from './LevelProp.interface.ts'
import Level3 from './Level3.tsx'

const Level2 = ({ value }: LevelPropInterface) => {
  return (
    <div>
      <h3>Level 2: {value}</h3>
      <Level3 value={value} />
    </div>
  )
}

export default Level2
