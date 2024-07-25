import { CSSProperties, useState } from 'react'
import { BarLoader, BeatLoader, BounceLoader, ClipLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('tomato') // Встановлення жовтого кольору як первісного

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color of the loader" />

      <BeatLoader
        color="orange"
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      />

      <BarLoader
        color="indigo"
        loading={loading}
        cssOverride={override}
        width={300}
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BounceLoader
        color="tomato"
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <ClipLoader
        color={color} // Використання стану color для управління кольором
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default App
