import "./itemDetail.css"

function  ItemDetail(props) {

  let altText = `imagen  + ${props.producto.titulo}`;
  let producto = {...props.producto}

    return (
    <>
      <div className="card-detail-main">
        <h1>{producto.titulo}</h1>
        <div className="card-detail_img">
          <img className="imgDetail" src={producto.img}  alt ={altText} srcSet="" />
        </div>
        <p><strong>Detalle del producto: </strong>{producto.detalle}</p>
        <div>
          <p className={producto.discount ? "precioOferta" : "precio"}>$ {producto.precio}</p>
          {producto.discount && <small className="oferta">$ {producto.precio - producto.precio*producto.discount}</small>} 
        </div>
      </div>
    </>
    );
  }
  
  export default ItemDetail;