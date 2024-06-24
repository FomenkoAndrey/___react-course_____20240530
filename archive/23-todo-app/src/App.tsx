import Form from './components/Form.tsx'
import Todos from './components/Todos.tsx'
import TodoActions from './components/TodoActions.tsx'
import { TodoProvider } from './components/TodoProvider.tsx'

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <TodoActions />
        <Todos />
      </div>
    </TodoProvider>
  )
}

export default App
