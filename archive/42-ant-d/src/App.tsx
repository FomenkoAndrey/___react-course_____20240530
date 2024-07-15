import LayoutExample from './components/LayoutExample.tsx'
import FormExample from './components/FormExample.tsx'
import MenuExample from './components/MenuExample.tsx'

const App = () => {
  return (
    <div>
      <MenuExample />

      <br />
      <hr />
      <br />

      <FormExample />

      <hr />

      <LayoutExample />
    </div>
  )
}

export default App
