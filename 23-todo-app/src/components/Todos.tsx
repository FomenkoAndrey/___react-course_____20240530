import Todo from './Todo.tsx'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.ts'

const Todos = () => {
  const { todos, completedTodosCount } = useContext(TodoContext)
  return (
    <div>
      {!todos.length && <p className="todos__empty">Todo list is empty</p>}
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
      {completedTodosCount > 0 && (
        <p className="todos__message">
          You have completed {completedTodosCount} {completedTodosCount > 1 ? 'todos' : 'todo'}
        </p>
      )}
    </div>
  )
}

export default Todos
