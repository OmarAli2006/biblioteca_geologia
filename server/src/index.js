//Archivo inicial del servidor
//Omar Chanel Ali Fuertes

const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

//middlewares
app.use(cors());
app.use(express.json());

//ROUTES

//register and login routes
app.use("/login", require("../routes/login"));
app.use("/register", require("../routes/register"));
app.use("/dashboard", require("../routes/dashboard"));
app.use("/is_verify", require("../routes/is_verify"));

//rutas del administrador
app.use("/insertar_libro", require("../routes/insertar_libro"));
app.use("/insertar_tesis", require("../routes/insertar_tesis"));
app.use("/insertar_imagen", require("../routes/insertar_imagen"));
app.use("/modificar_libro", require("../routes/modificar_libro"));
app.use("/modificar_tesis", require("../routes/modificar_tesis"));
app.use("/modificar_imagen", require("../routes/modificar_imagen"));
app.use("/modificar_usuario", require("../routes/modificar_usuario"));
app.use("/listar_usuarios", require("../routes/listar_usuarios"));
app.use("/listar_etiquetas" , require("../routes/listar_etiquetas"));
app.use("/insertar_etiqueta", require("../routes/insertar_etiqueta"));

//rutas del lector
app.use("/listar_libros", require("../routes/listar_libros"));
app.use("/listar_tesis", require("../routes/listar_tesis"));
app.use("/listar_imagenes", require("../routes/listar_imagenes"));
app.use("/ver_libro", require("../routes/ver_libro"));
app.use("/ver_tesis", require("../routes/listar_tesis"));
app.use("/ver_imagen", require("../routes/ver_imagen"));
app.use("/modificar_usuario", require("../routes/modificar_usuario"));

//Settings
app.set('port', 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Server in port ${app.get('port')}`);
});
