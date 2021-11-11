const router = require("express").Router();
const pool = require("../database/database");
const autorizacion = require("../middlewares/autorizacion");

router.get("/", autorizacion, async (req, res) => {
  try {
    const etiquetas = await pool.query("SELECT * FROM etiquetas");
    
    res.json(etiquetas.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al listar las etiquetas",
    });
  }
});

module.exports = router;