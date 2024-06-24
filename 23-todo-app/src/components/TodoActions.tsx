import Button from './Button.tsx'
import { RiCheckboxCircleLine, RiDeleteBin2Line } from 'react-icons/ri'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.ts'

const TodoActions = () => {
  const { deleteAllTodos, clearCompletedTodos, todos } = useContext(TodoContext)
  const completedTodosExist = todos.some((todo) => todo.completed)

  if (!todos.length) {
    return null
  }

  return (
    <div className="todos__actions">
      <Button title="Delete All Todos" onClick={() => deleteAllTodos()}>
        <RiDeleteBin2Line />
      </Button>
      <Button title="Clear All Todos" onClick={() => clearCompletedTodos()} disabled={!completedTodosExist}>
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default TodoActions
