import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import axios from "axios";
// import { Icon } from "leaflet";
import InfoComercio from "./InfoComercio";
import "../styles/normalize.css";
import "../styles/App.css";

/* 
const icon = new Icon({
  iconUrl: "pointer.png",
  iconSize: [32, 32],
});
 */

const Mapa = ({ busqueda }) => {
  const [comercios, guardarComercios] = useState([]);
  const [comercioSeleccionado, guardarComercioSeleccionado] = useState(null);

  // LLamado a la API
  useEffect(() => {
    const obtenerDatos = async () => {
      const url = "https://tarjetafamilia.catamarca.gob.ar/api/v1/commerce/";
      const respuesta = await axios.get(url);
      respuesta.data.data.splice(3, 1); //Elimina el comercio que tiene address null
      guardarComercios(respuesta.data.data);
    };
    obtenerDatos();
  }, []);

  // Filtrado de Resultados

  // Inicializa el Mapa
  const coordenadasCatamarca = {
    lat: -28.4739,
    long: -65.7726,
    zoom: 15,
  };
  const { lat, long, zoom } = coordenadasCatamarca;

  return (
    <Map center={[lat, long]} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {comercios.map((comercio) => (
        <Marker
          key={comercio.id}
          position={[
            comercio.attributes.point.coordinates[1],
            comercio.attributes.point.coordinates[0],
          ]}
          onclick={() => {
            guardarComercioSeleccionado(comercio);
          }}
        />
      ))}
      {comercioSeleccionado && (
        <Popup
          position={[
            comercioSeleccionado.attributes.point.coordinates[1],
            comercioSeleccionado.attributes.point.coordinates[0],
          ]}
          onClose={() => {
            guardarComercioSeleccionado(null);
          }}
        >
          <InfoComercio comercioSeleccionado={comercioSeleccionado} />
        </Popup>
      )}
    </Map>
  );
};

export default Mapa;
