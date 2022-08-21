
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import './navbar.css'

export default function Navbar() {
  const {user,dispatch} = useContext(UserContext);
 console.log()
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link style={{color:"inherit",textDecoration:"none"}} to="/" >
        <span className="logo">lamabooking</span>
        </Link>
        <div className="navItems">
          {user ? 
           <button onClick={()=>dispatch({type:"LOGOUT"})} className="navButton">Logout</button>
          :
         
          (<>
          <Link to="/">
          <button className="navButton">Register</button>
          </Link>
          <Link to="/login">
          <button className="navButton">Login</button>
          </Link>
          </>)}
        </div>
      </div>
    </div>
  )
}
