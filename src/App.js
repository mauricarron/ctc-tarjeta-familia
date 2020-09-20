import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Mapa from "./components/Mapa";
import Footer from "./components/Footer";

function App() {
  const [busqueda, guardarBusqueda] = useState("");

  return (
    <Fragment>
      <Mapa busqueda={busqueda} />
      <Formulario guardarBusqueda={guardarBusqueda} />
      <Footer />
    </Fragment>
  );
}

export default App;
