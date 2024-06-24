import { TodoInterface } from './Todo.interface.ts'

export interface TodosPropsInterface {
  todos: TodoInterface[]
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}
