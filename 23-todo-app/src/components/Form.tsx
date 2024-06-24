import { v4 as uuidv4 } from 'uuid'
import { FormPropsInterface } from '../types/FormProps.interface.ts'
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from './Button.tsx'

const Form = ({ addTodo }: FormPropsInterface) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Form submitted...')

    addTodo({
      id: uuidv4(),
      title,
      completed: false
    })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new todo..." onChange={handleInputChange} />
      <Button type="submit" title="Submit form">
        Save
      </Button>
    </form>
  )
}

export default Form
