import React from "react";
import "../styles/normalize.css";
import "../styles/styles.css";
import PropTypes from "prop-types";

const Formulario = ({ guardarBusqueda }) => {
  return (
    <header className="buscador">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Comercio, Categoria, Dirección..."
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
