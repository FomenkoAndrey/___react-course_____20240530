import { Button } from 'react-bootstrap'
import { Form, Formik } from 'formik'
import InputField from './InputField.tsx'
import { useRegistrationForm } from '../helpers/useRegistrationForm.ts'

const RegistrationForm = () => {
  const formikProps = useRegistrationForm()
  return (
    <Formik {...formikProps}>
      {({ isSubmitting, errors, touched, isValid }) => (
        <Form>
          <InputField name="username" placeholder="Введіть логін" label="Логін" touched={touched} errors={errors} />

          <InputField
            name="password"
            type="password"
            placeholder="Введіть пароль"
            label="Пароль"
            touched={touched}
            errors={errors}
          />

          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Підтвердіть пароль"
            label="Підтвердження паролю"
            touched={touched}
            errors={errors}
          />

          <InputField
            name="email"
            type="email"
            placeholder="Введіть email"
            label="Email"
            touched={touched}
            errors={errors}
          />

          <Button type="submit" variant="primary" disabled={!isValid || isSubmitting}>
            Зареєструватися
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
