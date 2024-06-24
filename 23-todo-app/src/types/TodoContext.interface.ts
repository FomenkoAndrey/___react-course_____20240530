import { TodoInterface } from './Todo.interface.ts'

export interface TodoContextInterface {
  todos: TodoInterface[]
  addTodo: (todo: TodoInterface) => void
  deleteTodo: (id: string) => void
  deleteAllTodos: () => void
  clearCompletedTodos: () => void
  toggleTodo: (id: string) => void
  completedTodosCount: number
  completedTodosExist: boolean
}
