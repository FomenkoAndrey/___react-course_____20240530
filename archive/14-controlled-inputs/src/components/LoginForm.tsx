import { FormEvent, useState } from 'react'

interface FormDataInterface {
  username: string
  password: string
}

const initialFormData: FormDataInterface = {
  username: '',
  password: ''
}

const LoginForm = () => {
  const [formData, setFormData] = useState<FormDataInterface>(initialFormData)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="form-control"
          placeholder="Username..."
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="text"
          className="form-control"
          placeholder="Password..."
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
