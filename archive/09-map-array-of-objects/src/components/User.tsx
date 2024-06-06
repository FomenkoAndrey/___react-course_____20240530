import { UserInterface } from '../types/User.interface.ts'

const User = ({ id, name, email }: UserInterface) => {
  return (
    <div>
      <h3>
        {id}. {name}
      </h3>
      <span>{email}</span>
      <hr />
    </div>
  )
}

export default User
