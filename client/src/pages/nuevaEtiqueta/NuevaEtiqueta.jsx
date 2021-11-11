import React from "react";
import "./nuevaEtiqueta.css";
import { Link } from "react-router-dom";
import ButtonNew from "../../components/buttonNew/ButtonNew";
import FormularioEtiqueta from "./FormularioEtiqueta";


export default function NuevaEtiqueta() {
  const [etiquetaChange, setEtiquetaChange] = React.useState(false);



  return (
    <div className="nuevaEtiqueta">
      <div className="topbar-page">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Nueva Etiqueta</span>
          </div>
          <div className="topRight">
            <Link to="/dashboard_admin/etiquetas" className="linkButton">
              <ButtonNew texto="Volver" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-block">
          <FormularioEtiqueta setEtiquetaChange={setEtiquetaChange}/>
      </div>
    </div>
  );
}
