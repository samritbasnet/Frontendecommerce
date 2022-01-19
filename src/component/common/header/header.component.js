import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <ul className="nav">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/category">Category</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/category/create">Add Category</NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#ccc" : "#fff",
                color: isActive ? "red" : "#",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
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
