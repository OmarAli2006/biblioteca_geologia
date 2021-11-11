import React from "react";
import "./sidebar.css";
import {
  Home,
  CollectionsBookmark,
  MenuBook,
  Image,
  Person,
  Close,
  Label,
} from "@material-ui/icons";
import { toast} from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Sidebar({setAuth}) {
  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Router>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h3 className="sidebarTitle">Administrador</h3>
          <ul className="sidebarList">
            <Link exact to="/dashboard_admin" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                <span className="text-menu">Inicio</span>
              </li>
            </Link>
            <Link exact to="/dashboard_admin/libros" className="link">
              <li className="sidebarListItem ">
                <CollectionsBookmark className="sidebarIcon" />
                <span className="text-menu">Libros</span>
              </li>
            </Link>
            <Link exact to="/dashboard_admin/tesis" className="link">
              <li className="sidebarListItem ">
                <MenuBook className="sidebarIcon" />
                <span className="text-menu">Tesis</span>
              </li>
            </Link>
            <Link to="/dashboard_admin/imagenes" className="link">
              <li className="sidebarListItem ">
                <Image className="sidebarIcon" />
                <span className="text-menu">Imagenes</span>
              </li>
            </Link>
            <Link to="/dashboard_admin/etiquetas" className="link">
              <li className="sidebarListItem ">
                <Label className="sidebarIcon" />
                <span className="text-menu">Etiquetas</span>
              </li>
            </Link>
            <Link to="/dashboard_admin/usuarios" className="link">
              <li className="sidebarListItem ">
                <Person className="sidebarIcon" />
                <span className="text-menu">Usuarios</span>
              </li>
            </Link>
            <li className="sidebarListItem " onClick={e => logout(e)}>
              <Close className="sidebarIcon" />
              <span className="text-menu">Salir</span>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}
