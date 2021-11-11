const router = require("express").Router();
const pool = require("../database/database");

const autorizacion = require("../middlewares/autorizacion");

router.get('/', autorizacion, async (req, res) => {
    try {
        console.log(req);
        const user = await pool.query (
            'SELECT * FROM usuarios WHERE id_usuario = $1',
            [req.usuario]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(403).json('Server Error');
    }
})

module.exports = router;