import React from "react";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Hecho con ❤ para{" "}
        <a
          href="http://clustertecnologicocatamarca.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cluster Tecnológico de Catamarca
        </a>{" "}
        <small>by</small>{" "}
        <a
          href="https://github.com/mdCarron"
          target="_blank"
          rel="noopener noreferrer"
        >
          mdCarron
        </a>{" "}
        | Carron Mauricio
      </p>
    </footer>
  );
};

export default Footer;
