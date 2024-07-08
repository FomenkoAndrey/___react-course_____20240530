import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
  const validationScheme = Yup.object({
    login: Yup.string()
      .required('Login is required')
      .min(3, 'Login must be at least 3 characters')
      .max(15, 'Login must be not more than 15 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(5, 'Password must be at least 6 characters')
      .max(20, 'Password must be not more than 20 characters')
  })

  const handleSubmit = (values: { login: string; password: string }) => {
    console.log(values)
  }

  return (
    <Formik initialValues={{ login: '', password: '' }} onSubmit={handleSubmit} validationSchema={validationScheme}>
      <Form>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field id="login" type="text" name="login" />
          <ErrorMessage name="login" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Login</label>
          <Field id="password" type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
