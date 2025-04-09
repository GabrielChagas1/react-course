import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return ( 
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav> 
  );
}
 
export default Navbar;