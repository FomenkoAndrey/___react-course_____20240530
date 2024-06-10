import { FormEvent } from 'react'

const LoginForm = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }

    console.log(target.username.value)
    console.log(target.password.value)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input type="text" className="form-control" name="username" placeholder="Username..." />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" name="password" placeholder="Password..." />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
