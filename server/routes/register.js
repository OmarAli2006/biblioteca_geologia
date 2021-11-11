const router = require("express").Router();
const pool = require("../database/database");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
//const validInfo = require('../middlewares/validInfo');

router.post("/", async (req, res) => {
  try {
    //1. desestructurar el req.body

    const { id_usuario, clave, ap_paterno, ap_materno, nombres, correo } =
      req.body;
    const tipo_usuario = false;
    const tipo_acceso = false;

    //2. ver si el usuario existe en la base de datos

    const user = await pool.query(
      "SELECT * FROM usuarios WHERE id_usuario = $1",
      [id_usuario]
    );

    if (user.rows.length !== 0) {
      return res
        .status(401)
        .send("El usuario ya esta registrado en el sistema");
    }

    //3. Encriptar la clave de usuario

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptClave = await bcrypt.hash(clave, salt);

    //4. Ingresar el nuevo usuario en la base de datos

    const nuevoUsuario = await pool.query(
      "INSERT INTO usuarios (id_usuario, clave, ap_paterno, ap_materno, nombres, correo, tipo_usuario, acceso_total) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ",
      [
        id_usuario,
        bcryptClave,
        ap_paterno,
        ap_materno,
        nombres,
        correo,
        tipo_usuario,
        tipo_acceso,
      ]
    );

    //5. generar el JWT Token

    const token = jwtGenerator(nuevoUsuario.rows[0].id_usuario);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Send Error");
  }
});

module.exports = router;
