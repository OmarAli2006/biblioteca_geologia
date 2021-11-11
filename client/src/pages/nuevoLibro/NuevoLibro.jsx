import React from "react";
import "./nuevoLibro.css";
import { Link } from "react-router-dom";
import ButtonNew from "../../components/buttonNew/ButtonNew";
import FormularioLibro from "./FormularioLibro";

export default function NuevoLibro() {
  
  return (
    <div className="nuevoLibro">
      <div className="topbar-page">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Nuevo Libro</span>
          </div>
          <div className="topRight">
            <Link to="/dashboard_admin/libros" className="linkButton">
              <ButtonNew texto="Volver" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-block">
        <FormularioLibro />
      </div>
    </div>
  );
}
