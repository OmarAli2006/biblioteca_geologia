/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Importar los componentes
import Login from "./login";
import Register from "./register";
import Dashboard_admin from "./dashboard_admin";
import Dashboard_lector from "./dashboard_lector";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Libros from "./pages/libros/Libros";

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/is_verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="dashboard_admin" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/dashboard_admin"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard_admin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/dashboard_lector"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard_lector {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/dashboard_admin/libros" component={Dashboard_admin} />
            <Route 
              path="/dashboard_admin/tesis" 
              component={Dashboard_admin} 
              render={(props) => 
                isAuthenticated ? (
                  <Dashboard_admin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
              />
            <Route
              path="/dashboard_admin/imagenes"
              component={Dashboard_admin}
            />
            <Route
              path="/dashboard_admin/usuarios"
              component={Dashboard_admin}
            />
            <Route
              path="/dashboard_admin/etiquetas"
              component={Dashboard_admin}
            />
            <Route
              path="/dashboard_admin/nuevaEtiqueta"
              component={Dashboard_admin}
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard_admin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
