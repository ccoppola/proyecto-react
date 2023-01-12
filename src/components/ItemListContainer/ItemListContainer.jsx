import { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import obtenerProductos, {
  getClotheByCategory,
} from "../../service/mockService";
import { useParams } from "react-router-dom";
import ItemProductos from "./ItemProductos";

function ItemListContainer() {
  const [ropa, setRopa] = useState([]);
  let { categoryid } = useParams();

  console.log("Renderizmos ILC");

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setRopa(respuesta);
        })
        .catch((error) => alert(error));
    } else {
      getClotheByCategory(categoryid).then((respuesta) => {
        setRopa(respuesta);
      });
    }
  }, [categoryid]);

  return (
    <Flex>
      {ropa.map((itemIterado) => {
        return <ItemProductos key={itemIterado.id} item={itemIterado} />;
      })}
    </Flex>
  );
}

export default ItemListContainer;