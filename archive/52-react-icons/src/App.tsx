import { IconContext } from 'react-icons'
import { FaAngular, FaReact } from 'react-icons/fa'

const App = () => {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
      <div>
        <h3>Icon Context Example</h3>
        <FaReact />
        <FaAngular />
      </div>
    </IconContext.Provider>
  )
}

export default App
