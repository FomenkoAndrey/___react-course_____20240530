import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store.ts'
import { ChangeEvent, FormEvent, useState } from 'react'
import { setUsername } from '../redux/userSlice.ts'

const User = () => {
  const username = useSelector((state: RootState) => state.user.name)
  const dispatch = useDispatch()
  const [newUsername, setNewUsername] = useState('')

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value.trim())
  }

  const handleUsernameSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(setUsername(newUsername))
  }

  return (
    <div>
      <h2>User: {username}</h2>
      <form onSubmit={handleUsernameSubmit}>
        <input type="text" value={newUsername} onChange={handleUsernameChange} />
        <button type="submit">Change username</button>
      </form>
    </div>
  )
}

export default User
