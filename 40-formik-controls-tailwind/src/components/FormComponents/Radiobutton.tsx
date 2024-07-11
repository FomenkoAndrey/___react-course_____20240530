import { ErrorMessage, Field, FieldInputProps } from 'formik'
import TextError from './TextError.tsx'

export interface RadiobuttonOption {
  key: string
  value: string
}

export interface RadiobuttonProps {
  label: string
  name: string
  options: RadiobuttonOption[]

  [key: string]: any
}

const Radiobutton = ({ label, name, options, ...rest }: RadiobuttonProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        <Field name={name} {...rest}>
          {({ field }: { field: FieldInputProps<any> }) => {
            return options.map((option: RadiobuttonOption) => {
              return (
                <div key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
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

export default Radiobutton
