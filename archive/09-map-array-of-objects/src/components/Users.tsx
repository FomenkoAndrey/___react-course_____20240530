import { UserInterface } from '../types/User.interface.ts'
import User from './User.tsx'
import { MOCK_USERS } from '../data/mock-users.ts'

const users: UserInterface[] = MOCK_USERS

const Users = () => {
  return (
    <div>
      {users.map((user: UserInterface) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  )
}

export default Users
