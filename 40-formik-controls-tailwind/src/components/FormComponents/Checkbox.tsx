import { ErrorMessage, Field, FieldInputProps } from 'formik'
import TextError from './TextError.tsx'

export interface CheckboxOption {
  key: string
  value: string
}

export interface CheckboxProps {
  label: string
  name: string
  options: CheckboxOption[]

  [key: string]: any
}

const Checkbox = ({ label, name, options, ...rest }: CheckboxProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        <Field name={name} {...rest}>
          {({ field }: { field: FieldInputProps<any> }) => {
            return options.map((option: CheckboxOption) => {
              return (
                <div key={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              )
            })
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </fieldset>
  )
}

export default Checkbox
