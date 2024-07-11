import { ErrorMessage, Field } from 'formik'
import TextError from './TextError.tsx'

interface TextareaProps {
  label: string
  name: string

  [key: string]: any
}

const Textarea = ({ label, name, ...rest }: TextareaProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} as="textarea" type="text" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
