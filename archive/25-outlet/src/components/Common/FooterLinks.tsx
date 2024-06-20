import { Link } from 'react-router-dom'

const FooterLinks = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </div>
  )
}

export default FooterLinks
