import "./itemDetailContainer.css";
import Button from "../Button/Button";

function ItemDetail({ title, imgurl, category, price, onAddToCart, detail }) {
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail_detail">
        <h1>{title}</h1>
        <h4 className="priceTag">$ {price}</h4>
        <p>{category}</p>
        <small>{detail}</small>
      </div>
      <a href="/carrito">
        <Button>Ir al carrito</Button>
      </a>
    </div>
  );
}

export default ItemDetail;
