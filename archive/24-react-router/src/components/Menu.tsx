import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          {/*<NavLink to="/">Home</NavLink>*/}
          <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
            Home
          </NavLink>
        </li>
        <li>
          {/*<NavLink to="/about">About</NavLink>*/}
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
            About
          </NavLink>
        </li>
        <li>
          {/*<NavLink to="/contacts">Contacts</NavLink>*/}
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
