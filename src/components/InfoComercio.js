import React from "react";
import "../styles/normalize.css";
import "../styles/App.css";

const InfoComercio = ({ comercioSeleccionado }) => {
  const { address, name, tags } = comercioSeleccionado.attributes;
  return (
    <div>
      <h2>{name}</h2>
      <p>{address.toLowerCase()}</p>
      <span>{tags[0]}</span>
    </div>
  );
};

export default InfoComercio;
