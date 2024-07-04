import { Provider } from 'react-redux'
import Counter from './components/Counter.tsx'
import store from './redux/store.ts'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
