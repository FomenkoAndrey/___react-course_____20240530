import { PropContext } from '../App.tsx'
import Level2 from './Level2.tsx'

// ! Context via Consumer
const Level1 = () => {
  return (
    <PropContext.Consumer>
      {(consumerValue) => {
        if (!consumerValue) {
          return <p>Помилка передачі контексту</p>
        }

        const { value } = consumerValue

        return (
          <>
            <h1>Level 1: {value}</h1>
            <Level2 />
          </>
        )
      }}
    </PropContext.Consumer>
  )
}

export default Level1
