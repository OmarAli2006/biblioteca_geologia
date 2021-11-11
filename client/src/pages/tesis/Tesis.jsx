import './tesis.css'
import React from 'react'
import ButtonNew from '../../components/buttonNew/ButtonNew'
import { Link } from 'react-router-dom'


export default function Tesis() {
    return (
        <div className="tesis">
            <div className="topbar-page">
          <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Lista de Tesis y Proyectos de Grado</span>
                </div>
                <div className="topRight">
                    <Link to="/dashboard_admin/nuevoLibro" className="linkButton">
                      <ButtonNew texto="Nueva Tesis o Proyecto" />
                    </Link>
                </div>
            </div>
          </div>
        </div>
    )
}
