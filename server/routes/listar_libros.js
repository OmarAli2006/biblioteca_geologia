const router = require("express").Router();
const pool = require("../database/database");
const autorizacion = require("../middlewares/autorizacion");

router.get('/', autorizacion, async (req, res) => {
    try {
        const libros = await pool.query (
            'SELECT * FROM libros'
        );
        res.json(libros.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;