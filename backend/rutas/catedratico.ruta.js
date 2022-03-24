var express = require('express');
const catedratico = require('../modelos/catedratico.modelo');
const Catedratico = require('../modelos/catedratico.modelo');
var CatedraticoModelo = require('../modelos/catedratico.modelo');
var CatedraticoRuta = express.Router();

//Obteniendo todos los elementos
CatedraticoRuta.get("/catedratico", function(req, res) {
    CatedraticoModelo.selectAll(function(resultado) {
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
CatedraticoRuta.get('/catedratico/:idCatedratico', function(req, res) {
    var id = req.params.idCatedratico;
    CatedraticoModelo.selectOne(id, function(resultado) {
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
CatedraticoRuta.post('/catedratico', function(req, res) {
    var data = req.body;
    CatedraticoModelo.create(data, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Editar un nuevo elemento 
CatedraticoRuta.put('/catedratico/:idCatedratico', function(req, res) {
    var NoCatedratico = req.params.idCatedratico;
    var data = req.body;

    if (NoCatedratico == data.idCatedratico) {
        CatedraticoModelo.edit(data, function(resultado) {
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
CatedraticoRuta.delete('/catedratico/:idCatedratico', function(req, res) {
    var NoCatedratico = req.params.idCatedratico;
    CatedraticoModelo.delete(NoCatedratico, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = CatedraticoRuta