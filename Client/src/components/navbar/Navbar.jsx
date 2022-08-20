
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link style={{color:"inherit",textDecoration:"none"}} to="/" >
        <span className="logo">lamabooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}
