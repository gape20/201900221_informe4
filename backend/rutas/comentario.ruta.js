var express = require('express');
const comentario = require('../modelos/comentario.modelo');
const Comentario = require('../modelos/comentario.modelo');
var ComentarioModelo = require('../modelos/comentario.modelo');
var ComentarioRuta = express.Router();

//Obteniendo todos los elementos
ComentarioRuta.get("/comentario", function(req, res) {
    ComentarioModelo.selectAll(function(resultado) {
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
ComentarioRuta.get('/comentario/:idComentario', function(req, res) {
    var id = req.params.idComentario;
    ComentarioModelo.selectOne(id, function(resultado) {
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
ComentarioRuta.post('/comentario', function(req, res) {
    var data = req.body;
    ComentarioModelo.create(data, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Editar un nuevo elemento 
ComentarioRuta.put('/comentario/:idComentario', function(req, res) {
    var NoComentario = req.params.idComentario;
    var data = req.body;

    if (NoComentario == data.idComentario) {
        ComentarioModelo.edit(data, function(resultado) {
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
ComentarioRuta.delete('/comentario/:idComentario', function(req, res) {
    var NoComentario = req.params.idComentario;
    ComentarioModelo.delete(NoComentario, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = ComentarioRuta