import Button from './Button.tsx'
import { RiCheckboxCircleLine, RiDeleteBin2Line } from 'react-icons/ri'
import { ActionsPropsInterface } from '../types/ActionsProps.interface.ts'

const Actions = ({ deleteAllTodos, clearCompletedTodos, completedTodosExist }: ActionsPropsInterface) => {
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

export default Actions
