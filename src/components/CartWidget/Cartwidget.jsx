import "./cartWidget.css"
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function  CartWidget() {
    const {totalItems} = useContext(cartContext);
    const cartIsEmpty = totalItems() > 0;
    return (
    <>
    <Link to={"/cart"}>
      <div className="carrito">
        <img className="icono" src="/img/iconCart_tvpvvk.svg" alt="Imagen carrito"/>
        { cartIsEmpty &&  <p>{totalItems()}</p>}
      </div> 
    </Link>

    </>
    );
  }
  
  export default CartWidget;