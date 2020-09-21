import React from "react";
import "../styles/normalize.css";
import "../styles/styles.css";
import PropTypes from "prop-types";

const InfoComercio = ({ comercioSeleccionado }) => {
  const { address, name, tags } = comercioSeleccionado.attributes;
  return (
    <div className="info-popup">
      <h2 className="local-nombre">{name.toLowerCase()}</h2>
      <p className="local-direccion">{address.toLowerCase()}</p>
      <span className="badge">{tags[0]}</span>
    </div>
  );
};

InfoComercio.propTypes = {
  comercioSeleccionado: PropTypes.object.isRequired,
};

export default InfoComercio;
