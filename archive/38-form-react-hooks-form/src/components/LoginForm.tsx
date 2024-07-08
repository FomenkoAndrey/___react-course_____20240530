import { useForm } from 'react-hook-form'

type FormData = {
  login: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          {...register('login', {
            required: 'This field is required',
            minLength: { value: 3, message: 'Minimum length is 3' },
            maxLength: { value: 15, message: 'Maximum length is 15' }
          })}
        />
        {errors.login && <div className="error">{errors.login.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 6, message: 'Minimum length is 6' },
            maxLength: { value: 20, message: 'Maximum length is 20' }
          })}
        />
        {errors.password && <div className="error">{errors.password.message}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm
