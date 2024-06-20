import { NavLink } from 'react-router-dom'
import { routes } from '../App.tsx'

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes
          .filter((route) => route.path !== '*')
          .map((route, index) => (
            <li key={index}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
