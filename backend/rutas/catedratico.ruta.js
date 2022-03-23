var express = require('express');
const catedratico = require('../modelos/catedratico.modelo');
const Catedratico = require('../modelos/catedratico.modelo');
var CatedraticoModelo = require('../modelos/catedratico.Modelo');
var CatedraticoRuta = express.Router();

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
module.exports = CatedraticoRuta