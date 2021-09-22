import React, { Fragment } from "react";
import "../styles/login.css";
import image from "../images/arbol_piedra.jpg";

const Login = () => {
  return (
    <Fragment>
      <section>
        <div className="imgBx">
          <img src={image} />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Ingresar</h2>
            <form>
              <div className="inputBx">
                <span>Usuario</span>
                <input type="text" name="" />
              </div>
              <div className="inputBx">
                <span>Contraseña</span>
                <input type="password" name="" />
              </div>
              <div className="inputBx">
                <input type="submit" value="Ingresar" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
