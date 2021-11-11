import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./dashboard_admin.css";

//importar componentes
import Topbar from "./components/admin/topbar/Topbar";
import Sidebar from "./components/admin/sidebar/Sidebar";

//importar paginas de administrador
import Home from "./pages/home/Home";
import Libros from "./pages/libros/Libros";
import Tesis from "./pages/tesis/Tesis";
import Imagenes from "./pages/imagenes/Imagenes";
import Usuarios from "./pages/usuarios/Usuarios";
import NuevoLibro from "./pages/nuevoLibro/NuevoLibro";
import Etiquetas from "./pages/etiquetas/Etiquetas";
import NuevaEtiqueta from "./pages/nuevaEtiqueta/NuevaEtiqueta";

const Dashboard_admin = () => {
  const [setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();

      setName(parseRes.nombres);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getName();
  });

  return (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/dashboard_admin">
              <Home />
            </Route>
            <Route path="/dashboard_admin/libros" render={ () => <Libros />} />
            <Route path="/dashboard_admin/tesis">
              <Tesis />
            </Route>
            <Route path="/dashboard_admin/imagenes">
              <Imagenes />
            </Route>
            <Route path="/dashboard_admin/usuarios">
              <Usuarios />
            </Route>
            <Route path="/dashboard_admin/nuevoLibro">
              < NuevoLibro/>
            </Route>
            <Route path="/dashboard_admin/etiquetas">
              <Etiquetas />
            </Route>
            <Route path="/dashboard_admin/nuevaEtiqueta">
              <NuevaEtiqueta />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default Dashboard_admin;
