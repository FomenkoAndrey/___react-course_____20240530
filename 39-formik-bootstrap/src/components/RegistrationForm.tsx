import { Button } from 'react-bootstrap'
import { ChangeEvent, FormEvent, useState } from 'react'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Логін є обов’язковим полем'),
  password: Yup.string().required('Пароль є обов’язковим полем'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі повинні співпасти')
    .required('Підтвердження паролю є обов’язковим полем'),
  email: Yup.string().email('Введіть коректний email').required('Email є обов’язковим полем')
})

const RegistrationForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'confirmPassword':
        setConfirmPassword(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Паролі не співпадають')
      return
    }
    console.log({ username, password, email })
  }

  return (
    <Formik
      initialValues={{ username: '', password: '', confirmPassword: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(true)
      }}
    >
      {({ isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Логін
            </label>
            <Field
              type="text"
              placeholder="Введіть логін"
              className="form-control"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <Field
              type="password"
              placeholder="Введіть пароль"
              className="form-control"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Підтвердження паролю
            </label>
            <Field
              type="password"
              placeholder="Підтвердьте пароль"
              className="form-control"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              placeholder="Введіть email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <Button type="submit" variant="primary" disabled={isSubmitting}>
            Зареєструватися
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
