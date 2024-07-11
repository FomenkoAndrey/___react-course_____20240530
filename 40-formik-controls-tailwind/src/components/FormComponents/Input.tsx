import { ErrorMessage, Field } from 'formik'
import TextError from './TextError.tsx'

interface InputProps {
  label: string
  name: string

  [key: string]: any
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} type="text" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
