const router = require("express").Router();
//const autorizacion = require("../middlewares/autorizacion");

router.get('/', async (req, res) => {
    try {
        res.json('insertar un libro');
        console.log("insertar un libro");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;