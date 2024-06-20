import Form from './components/Form.tsx'
import Todos from './components/Todos.tsx'
import { useState } from 'react'
import { MOCK_TODOS } from './data/mock-todos.ts'
import { TodoInterface } from './types/Todo.interface.ts'
import Actions from './components/Actions.tsx'

const App = () => {
  const [todos, setTodos] = useState(MOCK_TODOS as TodoInterface[])

  const addTodoHandler = (todo: TodoInterface) => {
    console.log(todo)
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <Form addTodo={addTodoHandler} />
      <Actions deleteAllTodos={deleteAllTodosHandler} clearCompletedTodos={clearCompletedTodosHandler} />
      <Todos todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
    </div>
  )
}

export default App
