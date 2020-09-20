import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import axios from "axios";
import { Icon } from "leaflet";
import pointer from "../pointer.png";
import InfoComercio from "./InfoComercio";
import "../styles/normalize.css";
import "../styles/App.css";
import PropTypes from "prop-types";

const Mapa = ({ busqueda }) => {
  const [comercios, guardarComercios] = useState([]);
  const [comercioSeleccionado, guardarComercioSeleccionado] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      const url = "https://tarjetafamilia.catamarca.gob.ar/api/v1/commerce/";
      const respuesta = await axios.get(url);
      respuesta.data.data.splice(3, 1); //Elimina el comercio que tiene address null
      guardarComercios(respuesta.data.data);
    };
    obtenerDatos();
  }, []);

  const busquedaComercios = comercios.filter(
    (comercio) =>
      comercio.attributes.name.indexOf(busqueda.toUpperCase()) !== -1 ||
      comercio.attributes.address.indexOf(busqueda.toUpperCase()) !== -1 ||
      comercio.attributes.tags[0].indexOf(busqueda) !== -1
  );

  const coordenadasCatamarca = {
    lat: -28.475,
    long: -65.79,
    zoom: 15,
  };
  const { lat, long, zoom } = coordenadasCatamarca;

  const icon = new Icon({
    iconUrl: pointer,
    iconSize: [32, 32],
  });

  return (
    <Map center={[lat, long]} zoom={zoom} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="topright" />
      {busquedaComercios.map((comercio) => (
        <Marker
          key={comercio.id}
          icon={icon}
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

Mapa.propTypes = {
  busqueda: PropTypes.string.isRequired,
};

export default Mapa;
