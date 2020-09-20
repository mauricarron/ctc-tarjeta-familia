import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Mapa from "./components/Mapa";

function App() {
  const [busqueda, guardarBusqueda] = useState("");

  return (
    <Fragment>
      <Mapa busqueda={busqueda} />
      <Formulario guardarBusqueda={guardarBusqueda} />
    </Fragment>
  );
}

export default App;
