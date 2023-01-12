import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <NavItem to="/"> 
            <img src="/img/Logo2.png"
                width="50"
                height="50"
                alt='Logo'
            />
        </NavItem>
        <Link class= "nav-link" to="/category/Camiseta">Camiseta</Link>
        <Link class= "nav-link" to="/category/Campera">Campera</Link>
        <Link class= "nav-link" to="/category/Short">Short</Link>
        <Link class= "nav-link" to="/carrito">
          <span>🛒</span>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
