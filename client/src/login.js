/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import "./styles/login.css";
import image from "./images/arbol_piedra.jpg";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    id_usuario: "",
    clave: ""
  })

  const { id_usuario, clave } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value});
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body= { id_usuario, clave } 

      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json(); 
      
      if(parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Bienvenido a la Bilioteca");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

      

    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <section>
        <div className="container">

        </div>
        <div className="imgBx">
          <img src={image} />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Ingresar</h2>
            <form onSubmit={onSubmitForm}>
              <div className="inputBx">
                <span>Usuario</span>
                <input 
                  type="text" 
                  name="id_usuario"
                  placeholder="Id de Usuario"
                  value={id_usuario}
                  onChange={e => onChange(e)} 
                />
              </div>
              <div className="inputBx">
                <span>Contraseña</span>
                <input 
                  type="password" 
                  name="clave"
                  placeholder="Contraseña"
                  value={clave}
                  onChange={e => onChange(e)}  
                />
              </div>
              <div className="inputBx">
                <input 
                type="submit" 
                value="Ingresar" 
              />
              </div>
               
            </form>
            <div className="inputBx">
                <p>¿No tienes una cuenta en la biblioteca?
                  <Link to="/register">Registrate Aqui</Link>
                </p>
              </div> 
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
