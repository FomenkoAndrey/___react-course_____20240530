import { useState } from 'react'
import { MemoizedComponent } from './components/MemoizedComponent.tsx'

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <br />

      {/*<NonMemoComponent count={count} />*/}
      <MemoizedComponent count={count} />

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
