import { Link, useMatch } from 'react-router-dom'

const Navigation = () => {
  const homeMatch = useMatch('/')
  const aboutMatch = useMatch('/about')

  console.log(homeMatch)
  console.log(aboutMatch)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={homeMatch ? 'activeLink' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={aboutMatch ? 'activeLink' : ''}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
