import React from "react";
import ItemListContainer from "../components/ItemListContainereee/ItemListContainer";
import "./homepage.css"

function HomePage() {
  return (
    <div>
      <h2 className="titulo-homepage">Productos</h2>
      <ItemListContainer />
    </div>
  );
}

export default HomePage;
