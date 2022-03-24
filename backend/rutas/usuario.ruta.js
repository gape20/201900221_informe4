var express = require('express');
const usuario = require('../modelos/usuario.modelo').default;
const Usuario = require('../modelos/usuario.modelo').default;
var UsuarioModelo = require('../modelos/usuario.modelo').default
var UsuarioRuta = express.Router();

//Obteniendo todos los elementos
UsuarioRuta.get("/usuario", function(req, res) {
    UsuarioModelo.selectAll(function(resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({
                mensaje: "Vacío"
            });
        }
    })
});

//Obtener solo un elemento
UsuarioRuta.get('/usuario/:idUsuario', function(req, res) {
    var id = req.params.idUsuario;
    UsuarioModelo.selectOne(id, function(resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({
                mensaje: "Vacío"
            });
        }
    });
});

// Crear un nuevo elemento 
UsuarioRuta.post('/usuario', function(req, res) {
    var data = req.body;
    UsuarioModelo.create(data, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

module.exports = UsuarioRuta