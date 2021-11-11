const router = require("express").Router();
const pool = require("../database/database");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
//const validInfo = require('../middlewares/validInfo');
const autorizacion = require('../middlewares/autorizacion');

router.post("/", async (req, res) => {
  try {
    //1. Desestructurar el req.body

    const { id_usuario, clave } = req.body;

    //2. Revisar si el usuario no existe (si no existe, enviar mensaje de error)
    const usuario = await pool.query(
      "SELECT * FROM usuarios WHERE id_usuario = $1",
      [id_usuario]
    );

    if (usuario.rows.length === 0) {
      return res.status(401).json("El numero de usuario o la contraseña son incorrectos");
    }

    //3. Revisar si la contraseña ingresada coincide con la almacenada en la base de datos

    const claveValida = await bcrypt.compare(clave, usuario.rows[0].clave);

    if (!claveValida) {
      res.status(401).json("El numero de usuario o la clave son incorrectos");
    }

    //4 Entregar el JWT Token

    const token = jwtGenerator(usuario.rows[0].id_usuario);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;