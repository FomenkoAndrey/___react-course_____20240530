import { Field, FieldProps } from 'formik'

const SuccessMessage = ({ name }: { name: string }) => {
  return (
    <Field name={name}>
      {({ form: { touched, errors } }: FieldProps) =>
        touched[name] && !errors[name] ? <div className="valid-feedback">Дані введено успішно</div> : null
      }
    </Field>
  )
}

export default SuccessMessage
