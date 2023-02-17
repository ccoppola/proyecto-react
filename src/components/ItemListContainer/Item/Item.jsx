import "./item.css"
import { Link } from "react-router-dom";
import MyButton from "../../Buttons/MyButton/MyButton";

function  Item(props) {
    let producto = {...props.producto};
    let altText = `imagen  + ${producto.titulo}`;
    return (
    <>  
        <Link to={`/item/${producto.IDproducto}`}>
            <div className="item">
                <div className="item-card_header">
                    <h5>{producto.titulo}</h5>
                </div>
                <div className="item-card_img">
                    <img className="imgItem" src={producto.img} alt ={altText} srcSet="" />
                </div>
                <div className="test">
                    <p className={producto.discount ? "precioOferta" : "precio"}>$ {producto.precio}</p>
                    {producto.discount && <small className="oferta">$ {producto.precio - producto.precio*producto.discount}</small>}
                </div>   
                <MyButton 
                    className = "btn"
                    text = "Ver mas"
                />          
            </div>
         
        </Link>
    </>
    );
  }
  
  export default Item;