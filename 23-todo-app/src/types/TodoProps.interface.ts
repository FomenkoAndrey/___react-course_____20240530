import { TodoInterface } from './Todo.interface.ts'

export interface TodoPropsInterface {
  todo: TodoInterface
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}
