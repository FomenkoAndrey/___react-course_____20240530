import Level1 from './components/Level1.tsx'

const App = () => {
  const propValue = 'Hello! This is prop value'

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Level1 value={propValue} />
    </div>
  )
}

export default App
