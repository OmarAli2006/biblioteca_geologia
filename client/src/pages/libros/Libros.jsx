import React from "react";
import "./libros.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ButtonNew from "../../components/buttonNew/ButtonNew";
import TablaLibros from "./TablaLibros";

export default function Libros() {
  return (
    <div className="libros">
      <div className="topbar-page">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Lista de Libros</span>
          </div>
          <div className="topRight">
            <Link to="/dashboard_admin/nuevoLibro" className="linkButton">
              <ButtonNew texto="Nuevo Libro" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-block">
        <TablaLibros />
      </div>
    </div>
  );
}
