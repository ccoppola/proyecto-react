import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getClothes } from "../../service/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [clothe, setClothe] = useState({ title: "Cargando", price: "--,--" });

  let params = useParams();


  useEffect(() => {
    getClothes(params.itemid)
      .then((respuesta) => {
        setClothe(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail
      title={clothe.title}
      imgurl={clothe.imgurl}
      category={clothe.category}
      price={clothe.price}
      detail={clothe.detail}
    />
  );
}
export default ItemDetailContainer;

