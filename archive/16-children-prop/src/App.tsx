import ParentComponent from './components/ParentComponent.tsx'
import ChildComponent from './components/ChildComponent.tsx'

const App = () => {
  return (
    <div>
      <ParentComponent color="green">
        <h2>Passed from AppComponent as children into ParentComponent</h2>
        <p>Another child passed from AppComponent into ParentComponent</p>

        <ChildComponent color="blue">
          <h3>Passed from ParentComponent as children into ChildComponent</h3>
          <ul>
            <li>Another child passed from ParentComponent into ChildComponent</li>
            <li>Another child passed from ParentComponent into ChildComponent</li>
          </ul>
        </ChildComponent>
      </ParentComponent>
    </div>
  )
}

export default App
