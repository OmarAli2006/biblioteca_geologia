import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/styles";
import "./FormularioLibro.css";
import { Book, Image } from "@material-ui/icons";

const Input = styled("input")({
  display: "none",
});

export default function FormularioLibro() {
  const [libro, setLibro] = React.useState({
    titulo: "",
    autor: "",
    editorial: "",
    descripcion: "",
    fecha_publicacion: "",
    pdf_name: "",
    image_name: "",
    etiquetas: ""
  });
  const {
    titulo,
    autor,
    editorial,
    descripcion,
    fecha_publicacion,
    pdf_name,
    image_name,
    etiquetas
  } = libro;

  const onChange = (e) => {
    setLibro({
      ...libro,
      [e.target.name]: e.target.value,
    });

    console.log(libro);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        titulo,
        autor,
        editorial,
        descripcion,
        fecha_publicacion,
        pdf_name,
        image_name,
        etiquetas
      };
      console.log(body);
      const response = await fetch("http://localhost:5000/insertar_libro", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "token": localStorage.token },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <TextField
          fullWidth
          name="titulo"
          value={titulo}
          onChange={(e) => onChange(e)}
          id="outlined-password-input"
          label="Titulo del Libro"
          type="text"
          variant="outlined"
          sx={{
            "& .MuiTextField-root": { m: 10, mt: 10, width: "100%" },
          }}
        />
        <div className="form-input">
          <TextField
            fullWidth
            name="descripcion"
            value={descripcion}
            onChange={(e) => onChange(e)}
            id="filled-multiline-static"
            label="Descripcion del Libro"
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            sx={{ margin: 10 }}
          />
        </div>
        <div className="form-input">
          <TextField
          name="autor"
          value={autor}
          onChange={(e) => onChange(e)}
            fullWidth
            id="outlined-password-input"
            label="Autor del Libro"
            type="text"
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <TextField
          name="editorial"
          value={editorial}
          onChange={(e) => onChange(e)}
            fullWidth
            id="outlined-password-input"
            label="Editorial"
            type="text"
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <TextField
          name="fecha_publicacion"
          value={fecha_publicacion}
          onChange={(e) => onChange(e)}
            fullWidth
            id="outlined-password-input"
            label="Año de Publicacion"
            type="text"
            variant="outlined"
          />
        </div>
        <div className="topbar-page">
          <div className="topbarWrapper">
            <div className="topLeft">
              <label htmlFor="contained-button-file">
                <Input
                name="pdf_name"
                value={pdf_name}
                onChange={(e) => onChange(e)}
                  accept="pdf/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span" endIcon={<Book />}>
                  Seleccionar Archivo de Texto
                </Button>
              </label>
            </div>
            <div className="topRight">
              <label htmlFor="contained-button-file">
                <Input
                name="image_name"
                value={image_name}
                onChange={(e) => onChange(e)}
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button
                  variant="contained"
                  component="span"
                  endIcon={<Image />}
                >
                  Seleccionar Caratula del Libro
                </Button>
              </label>
            </div>
          </div>
        </div>
        <div className="form-input">
          <h3 style={{ color: "darkblue" }}>Etiquetas</h3>
          <FormGroup arial-label="position" row name="etiquetas">
            <FormControlLabel
              name="etiquetas"
              value="Mineria"
              control={<Checkbox />}
              label="Mineria"
              labelPlacement="Mineria"
            />
            <FormControlLabel
              name="etiquetas"
              value="Mineria"
              control={<Checkbox />}
              label="Mineria"
              labelPlacement="Mineria"
            />
            <FormControlLabel
              value="Mineria"
              control={<Checkbox />}
              label="Mineria"
              labelPlacement="Mineria"
            />
            <FormControlLabel
              value="Mineria"
              control={<Checkbox />}
              label="Mineria"
              labelPlacement="Mineria"
            />
            <FormControlLabel
              value="Mineria"
              control={<Checkbox />}
              label="Mineria"
              labelPlacement="Mineria"
            />
          </FormGroup>
        </div>

        <input type="submit" value="Guardar"  />
        </div>
      </form>
    </div>
  );
}
