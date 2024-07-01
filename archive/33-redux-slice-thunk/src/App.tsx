import { Provider } from 'react-redux'
import store from './redux/store.ts'
import Counter from './components/Counter.tsx'
import User from './components/User.tsx'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <User />
    </Provider>
  )
}

export default App
