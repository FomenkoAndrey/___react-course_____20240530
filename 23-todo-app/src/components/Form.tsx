import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Button from './Button.tsx'
import { TodoContext } from '../context/TodoContext.ts'

const Form = () => {
  const { addTodo } = useContext(TodoContext)
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({
      id: uuidv4(),
      title,
      completed: false
    })
    setTitle('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new todo..." value={title} onChange={handleInputChange} />
      <Button type="submit" title="Submit form" disabled={!title.trim()}>
        Save
      </Button>
    </form>
  )
}

export default Form
