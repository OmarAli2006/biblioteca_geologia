const router = require("express").Router();
const pool = require("../database/database");
const autorizacion = require("../middlewares/autorizacion");

router.post("/", autorizacion, async (req, res) => {
    try {
        //1 verificar si la etiqueta existe
        const { nombre_etiqueta } = req.body;
        console.log(nombre_etiqueta);
        const etiqueta = await pool.query("SELECT * FROM etiquetas WHERE etiqueta = $1", [nombre_etiqueta]);
        console.log(etiqueta.rows.length)
        //2 si no existe, insertarla
        if (etiqueta.rows.length === 0) {
            const result = await pool.query("INSERT INTO etiquetas (etiqueta) VALUES ($1) RETURNING * ", [nombre_etiqueta]);
            res.json({ message: "Etiqueta insertada correctamente" });
        } else {
            res.json({ message: "Etiqueta ya existe" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al insertar etiqueta",
            data: {}
        });
    }
}) 

module.exports = router;