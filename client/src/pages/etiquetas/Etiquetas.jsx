import React from "react";
import "./etiquetas.css";
import { Link } from "react-router-dom";
import ButtonNew from "../../components/buttonNew/ButtonNew";
import TablaEtiquetas from "./TablaEtiquetas";

export default function Etiquetas() {
  return (
    <div className="etiquetas">
      <div className="topbar-page">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Lista de Etiquetas</span>
          </div>
          <div className="topRight">
            <Link to="/dashboard_admin/nuevaEtiqueta" className="linkButton">
              <ButtonNew texto="Nueva Etiqueta" />
            </Link>
          </div>
        </div>
      </div>
      <div className="content-page">
        <TablaEtiquetas />
      </div>
    </div>
  );
}
