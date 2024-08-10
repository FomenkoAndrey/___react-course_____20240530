import { NavLink } from 'react-router-dom'
import { LinkInterface } from '../types/Link.interface.ts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store.ts'
import { login, logout } from '../redux/authSlice.ts'

const links: LinkInterface[] = [
  { path: '/', name: 'Products' },
  { path: '/posts', name: 'Posts' },
  { path: '/users', name: 'Users' },
  { path: '/todos', name: 'Todos' }
]

const Navbar = () => {
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state: RootState) => state.auth)

  console.log(isLogged)

  const handleLogin = () => {
    dispatch(login())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          {links.map((link: LinkInterface, index: number) => (
            <li key={index} className="navbar__item">
              <NavLink to={link.path} className="navbar__link">
                {link.name}
              </NavLink>
            </li>
          ))}
          {isLogged ? (
            <li className="navbar__item">
              <button onClick={handleLogout} className="navbar__link">
                Logout
              </button>
            </li>
          ) : (
            <li className="navbar__item">
              <button onClick={handleLogin} className="navbar__link">
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
