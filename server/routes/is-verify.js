const router = require("express").Router();
const autorizacion = require("../middlewares/autorizacion");

router.get("/", autorizacion, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
