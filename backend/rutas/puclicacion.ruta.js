var express = require('express');
const publicacion = require('../modelos/publicacion.modelo');
const Publicacion = require('../modelos/publicacion.modelo');
var PublicacionModelo = require('../modelos/publicacion.modelo');
var PublicacionRuta = express.Router();

//Obteniendo todos los elementos
PublicacionRuta.get("/publicacion", function(req, res) {
    PublicacionModelo.selectAll(function(resultado) {
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
PublicacionRuta.get('/publicacion/:idPublicacion', function(req, res) {
    var id = req.params.idPublicacion;
    PublicacionModelo.selectOne(id, function(resultado) {
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
PublicacionRuta.post('/publicacion', function(req, res) {
    var data = req.body;
    PublicacionModelo.create(data, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Editar un nuevo elemento 
PublicacionRuta.put('/publicacion/:idPublicacion', function(req, res) {
    var NoPublicacion = req.params.idPublicacion;
    var data = req.body;

    if (NoPublicacion == data.idPublicacion) {
        PublicacionModelo.edit(data, function(resultado) {
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
PublicacionRuta.delete('/publicacion/:idPublicacion', function(req, res) {
    var NoPublicacion = req.params.idPublicacion;
    PublicacionModelo.delete(NoPublicacion, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = PublicacionRuta