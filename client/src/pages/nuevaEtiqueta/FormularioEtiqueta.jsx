import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

export default function FormularioEtiqueta() {
  const [etiqueta, setEtiqueta] = useState({
    nombre_etiqueta: ""
  });

  const { nombre_etiqueta } = etiqueta;

  const onChange = e => {
    setEtiqueta({ ...etiqueta, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {

      const body = { nombre_etiqueta };
      console.log(body);

      const response = await fetch("http://localhost:5000/insertar_etiqueta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.token
        },
        body: JSON.stringify(body)
      });
      const parseResponse = await response.json();
      toast.success(parseResponse.message);
      Redirect("/etiquetas");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <TextField
            fullWidth
            name="nombre_etiqueta"
            value={nombre_etiqueta}
            onChange={(e) => onChange(e)}
            id="outlined-password-input"
            label="Nombre de Etiqueta"
            type="text"
            variant="outlined"
            sx={{
              "& .MuiTextField-root": { m: 10, mt: 10, width: "100%" },
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
}
