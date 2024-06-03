import Button from './components/Button.jsx'

const App = () => {
  return (
    <div>
      <h1>First React App</h1>
      <Button text="Submit button" type="submit" num={1} disabled />
      <Button text="Reset button" type="reset" num={2} disabled={false} />
      <Button text="Button text" type="button" num={3} disabled={true} />
    </div>
  )
}

export default App
