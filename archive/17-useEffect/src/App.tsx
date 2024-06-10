import { useEffect, useState } from 'react'
import { UserInterface } from './types/User.interface.ts'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [user, setUser] = useState<UserInterface | null>(null)
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        console.log(user)
      })

    console.log('Count:', count)
  }, [count])

  return (
    <div>
      <h1>Render of Users list</h1>
      <input type="number" onChange={(e) => setCount(+e.target.value)} />
      <ul>
        {users.map((user: UserInterface) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
