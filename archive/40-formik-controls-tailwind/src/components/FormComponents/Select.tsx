import { ErrorMessage, Field } from 'formik'
import TextError from './TextError.tsx'

export interface SelectOption {
  key: string
  value: string
}

export interface SelectProps {
  label: string
  name: string
  options: SelectOption[]

  [key: string]: any
}

const Select = ({ label, name, options, ...rest }: SelectProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label htmlFor={name} className="font-bold text-sm text-gray-600">
        {label}
      </label>
      <Field id={name} as="select" type="text" name={name} {...rest} className="border p-2 rounded">
        {options.map((option: SelectOption) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
