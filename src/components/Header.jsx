import { NavLink, Link } from "react-router-dom"

export default function Header(){
    return(
      <header>
        <Link to="/" ><h1>#VANLIFE</h1></Link>
        <ul>
          <li><NavLink to="/host" className={({isActive}) => isActive ? "active" : ""}>Host</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/vans" className={({isActive}) => isActive ? "active" : ""}>Vans</NavLink></li>
        </ul>
      </header>
    )
  }