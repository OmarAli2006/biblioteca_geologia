import React, { Fragment, useState } from "react";

const Register = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    id_usuario: "",
    clave: "",
    ap_paterno: "",
    ap_materno: "",
    nombres: "",
    correo: "",
  });

  const { id_usuario, clave, ap_paterno, ap_materno, nombres, correo } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = { id_usuario, clave, ap_paterno, ap_materno, nombres, correo };

          const response = await fetch("http://localhost:5000/register",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          const parseRes = await response.json();
          
          localStorage.setItem("token", parseRes.token);
          setAuth(true);

        } catch (err) {
          console.error(err.message);
      }
  }

  return (
    <Fragment>
      <h1>Registro</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="id_usuario"
          placeholder="Registro Universitario"
          className="form-control my-3"
          value={id_usuario}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="clave"
          placeholder="contraseña"
          value={clave}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="ap_paterno"
          placeholder="Apellido paterno"
          value={ap_paterno}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="ap_materno"
          placeholder="Apellido Materno"
          value={ap_materno}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={nombres}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo Electronico"
          value={correo}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Register;
