module.exports = function (req, res, next) {
    const { id_usuario, clave, ap_paterno, ap_materno, nombres, correo } =
      req.body;
    
    function validarUsuario(id_usuario) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w[2,3])+$/.test(id_usuario);
    }

    if(req.path === '/register') {
        if (!(id_usuario, clave, ap_paterno, ap_materno, nombres, correo)) {
            return req.status(401).json('Falta de credenciales');
        } else if (!validarUsuario(id_usuario)) {
            return res.status(401).json('Identificador de usuario invalido');
        }

    } else if (req.path ==='/login') {
        if (!(id_usuario, clave).every(Boolean)) {
            return res.status(401).json('Falta de credenciales');
        } else if (!validarUsuario(id_usuario)) {
            return res.status(401).json('Identificador de usuario invalido')
        }
    }
    next();
};