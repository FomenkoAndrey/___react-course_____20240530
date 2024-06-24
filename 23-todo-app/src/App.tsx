import Form from './components/Form.tsx'
import Todos from './components/Todos.tsx'
import { useState } from 'react'
import { MOCK_TODOS } from './data/mock-todos.ts'
import { TodoInterface } from './types/Todo.interface.ts'
import Actions from './components/Actions.tsx'

const App = () => {
  const [todos, setTodos] = useState(MOCK_TODOS as TodoInterface[])

  const addTodoHandler = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const completedTodosCount: number = todos.filter((todo) => todo.completed).length

  return (
    <div className="container">
      <h1>Todo App</h1>
      <Form addTodo={addTodoHandler} />
      {!!todos.length && (
        <Actions
          deleteAllTodos={deleteAllTodosHandler}
          clearCompletedTodos={clearCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <Todos todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {completedTodosCount > 0 && (
        <p className="todos__message">{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</p>
      )}
    </div>
  )
}

export default App
