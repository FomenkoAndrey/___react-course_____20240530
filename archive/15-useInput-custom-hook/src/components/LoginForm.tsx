import { FormEvent } from 'react'
import { useInput } from '../hooks/useInput.ts'

const LoginForm = () => {
  const username = useInput('')
  const password = useInput('')

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: username.value,
      password: password.value
    })
  }
  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input id="username" type="text" className="form-control" placeholder="Username..." {...username} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input id="password" type="text" className="form-control" placeholder="Password..." {...password} />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
