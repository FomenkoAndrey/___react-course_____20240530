import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

const LoginForm = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLoginTouched, setIsLoginTouched] = useState<boolean>(false)
  const [isPasswordTouched, setIsPasswordTouched] = useState<boolean>(false)

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value.trim())
  }

  const handleLoginBlur = () => {
    setIsLoginTouched(true)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim())
  }

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true)
  }

  const validateLogin = (login: string) => {
    if (login === '') {
      setLoginError('Login is required')
      return false
    } else if (login.length < 3 || login.length > 15) {
      setLoginError('Login must be between 3 and 15 characters')
      return false
    }
    setLoginError('')
    return true
  }

  const validatePassword = (password: string) => {
    if (password === '') {
      setPasswordError('Password is required')
      return false
    } else if (password.length < 5 || password.length > 20) {
      setPasswordError('Password must be between 5 and 20 characters')
      return false
    }
    setPasswordError('')
    return true
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (isFormValid) {
      console.log('Form submitted')
      console.log('Login:', login)
      console.log('Password:', password)
    } else {
      console.log('Form has errors')
    }
  }

  useEffect(() => {
    if (isLoginTouched) {
      validateLogin(login)
    }
    if (isPasswordTouched) {
      validatePassword(password)
    }
    if (isLoginTouched && isPasswordTouched) {
      setIsFormValid(validateLogin(login) && validatePassword(password))
    }
  }, [login, password, isLoginTouched, isPasswordTouched])

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input id="login" type="text" value={login} onChange={handleLoginChange} onBlur={handleLoginBlur} />
        {loginError && <div className="error">{loginError}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  )
}

export default LoginForm
