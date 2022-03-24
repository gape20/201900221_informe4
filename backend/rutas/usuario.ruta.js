var express = require('express');
const usuario = require('../modelos/usuario.modelo');
const Usuario = require('../modelos/usuario.modelo');
var UsuarioModelo = require('../modelos/usuario.modelo');
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

// Editar un nuevo elemento 
UsuarioRuta.put('/usuario/:idUsuario', function(req, res) {
    var NoUsuario = req.params.idUsuario;
    var data = req.body;

    if (NoUsuario == data.idUsuario) {
        UsuarioModelo.edit(data, function(resultado) {
            if (resultado.affectedRows > 0) {
                res.json(resultado);
            } else {
                res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
            }
        });
    } else {
        res.json({ 'Mensaje': 'No son el mismo id' });
    }
});

// Eliminar un elemento
UsuarioRuta.delete('/usuario/:idUsuario', function(req, res) {
    var NoUsuario = req.params.idUsuario;
    UsuarioModelo.delete(NoUsuario, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = UsuarioRuta