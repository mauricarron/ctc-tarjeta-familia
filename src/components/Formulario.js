import React from "react";
import "../styles/normalize.css";
import "../styles/App.css";
import PropTypes from "prop-types";

const Formulario = ({ guardarBusqueda }) => {
  return (
    <header className="buscador">
      <form>
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Ingrese el nombre de un comercio"
          onChange={(e) => {
            guardarBusqueda(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

Formulario.propTypes = {
  guardarBusqueda: PropTypes.func.isRequired,
};

export default Formulario;
