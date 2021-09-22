const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header('token');

        if(!jwtToken) {
            return res.status(403).json('Acceso no autorizado');
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.usuario = payload.usuario;

        next();

    } catch (err) {
        console.error(err.message);
        return res.status(403).json('Acceso no autorizado');
    }
}