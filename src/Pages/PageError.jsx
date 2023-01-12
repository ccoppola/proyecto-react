import React from "react";
import { useNavigate } from "react-router-dom";
import "./pagerror.css"

function PageError() {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/");
  // }, 2000);

  return (
    <div className="page-error">
      <h1>Página no encontrada.</h1>
      <small>Te estamos redirigiendo al inicio...</small>
    </div>
  );
}

export default PageError;