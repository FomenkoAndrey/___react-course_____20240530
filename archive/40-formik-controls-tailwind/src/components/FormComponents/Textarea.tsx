import { ErrorMessage, Field } from 'formik'
import TextError from './TextError.tsx'

interface TextareaProps {
  label: string
  name: string

  [key: string]: any
}

const Textarea = ({ label, name, ...rest }: TextareaProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label htmlFor={name} className="font-bold text-sm text-gray-600">
        {label}
      </label>
      <Field id={name} as="textarea" type="text" name={name} {...rest} className="border p-2 rounded resize-y" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
