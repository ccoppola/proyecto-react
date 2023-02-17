import "./navBar.css"
import CartWidget from "../CartWidget/Cartwidget";
import { NavLink } from "react-router-dom";


function  NavBAR() {
    return (
    <>
      <nav className="navBar">
      <NavLink to={"/"}>
        <img className="icon" src="/img/Logo2.png" alt= "logo" />
      </NavLink> 
          
        <ul>
          <li>
            <NavLink to={"/categoria/Camiseta"}>Camisetas</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/Campera"}>Camperas</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/Short"}>Shorts</NavLink>
          </li>
        </ul>
      
        <CartWidget/>
      </nav>  
    </>
    );
  }
  
  export default NavBAR;