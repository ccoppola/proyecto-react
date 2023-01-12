import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./itemListContainer.css";

function ItemProductos(props) {
  const { title, price, imgurl, category, id} = props.item;

  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {price}</h3>
        <small>{category}</small>
      </div>
      <Link to={`/detalle/${id}`}>
        <Button padding="14px">
          Ver más
        </Button>
      </Link>
      <br></br>
    </div>
  );
}

export default ItemProductos;
