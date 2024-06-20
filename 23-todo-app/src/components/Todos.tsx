import Todo from './Todo.tsx'
import { TodosPropsInterface } from '../types/TodosProps.interface.ts'

const Todos = ({ todos, deleteTodo, toggleTodo }: TodosPropsInterface) => {
  return (
    <div>
      {todos.length === 0 && <p className="todos__empty">Todo list is empty</p>}
      {todos.map((todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} key={todo.id} />
      ))}
    </div>
  )
}

export default Todos
