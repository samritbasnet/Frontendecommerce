import {NavLink} from 'react-router-dom';
export function Header (){
    return(
       <header>
        <ul className="nav">
         <li className="nav-link">
        <NavLink to="/">Home</NavLink> 
         </li>
           <li className="nav-link">
           <NavLink to="/contact">Contact</NavLink>
           </li>
           <li className="nav-link">
           <NavLink style={({isActive})=>{
            return{
               backgroundColor:(isActive ? '#ccc': '#fff'),
               color:(isActive ? 'red' :'#')
            }
           }} to="/about">About</NavLink> 
           </li>
           <li className="nav-link">
           <NavLink to="/login">Login</NavLink> 
           </li>
           <li className="nav-link">
           <NavLink to="/register">Register</NavLink> 
           </li>

         <li className="nav-item dropdown">
        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="#">Action</NavLink>
          <NavLink className="dropdown-item" to="#">Another action</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink class="dropdown-item" to="#">Something else here</NavLink>
        </div>
      </li>
        </ul>          
       </header>
    );
}  