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
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} as="select" type="text" name={name} {...rest}>
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
