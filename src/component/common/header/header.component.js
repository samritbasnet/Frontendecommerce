import { NavLink } from "react-router-dom";
import{Navbar,Nav,Container} from 'react-bootstrap';
import './header.component.css';

function getActive(active){
  return (active) ? 'nav-active' : '';
}

export function Header() {
  return (
    <header>
      <ul className="nav">
        <li className="nav-link">
          <NavLink className={({isActive})=>getActive(isActive) } 
          to="/">Home</NavLink>
        </li> 
        <li className="nav-link">
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li className="nav-link">
           <NavLink className={({isActive})=>getActive(isActive)} 
          to="/category">Category</NavLink>
        </li>
       
  
        
        <li className="nav-link">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/register">Register</NavLink>
        </li>
   
      </ul>
    </header>
  );
}
