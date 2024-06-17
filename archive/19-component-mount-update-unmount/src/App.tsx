import Test from './components/Test.tsx'
import { useState } from 'react'

const App = () => {
  const [showComponent, setShowComponent] = useState()
  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>Toggle Component</button>

      {showComponent && <Test />}
    </div>
  )
}

export default App
