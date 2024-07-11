import { ErrorMessage, Field } from 'formik'
import TextError from './TextError.tsx'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { uk } from 'date-fns/locale'

export interface DatepickerProps {
  label: string
  name: string

  [key: string]: any
}

const Datepicker = ({ label, name, ...rest }: DatepickerProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label htmlFor={name} className="font-bold text-sm text-gray-600">
        {label}
      </label>
      <Field id={name} type="text" name={name} {...rest}>
        {({ field, form }: any) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <ReactDatePicker
              portalId="root-portal"
              id={name}
              {...field}
              {...rest}
              selected={value}
              placeholderText={rest.placeholder}
              onChange={(val) => setFieldValue(name, val)}
              locale={uk}
              dateFormat="dd.MM.yyyy"
              className="border p-2 rounded min-w-[250px]"
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Datepicker
