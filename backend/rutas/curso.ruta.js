var express = require('express');
const curso = require('../modelos/curso.modelo');
const Curso = require('../modelos/curso.modelo');
var CursoModelo = require('../modelos/curso.modelo');
var CursoRuta = express.Router();

//Obteniendo todos los elementos
CursoRuta.get("/curso", function(req, res) {
    CursoModelo.selectAll(function(resultado) {
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
CursoRuta.get('/curso/:idCurso', function(req, res) {
    var id = req.params.idCurso;
    CursoModelo.selectOne(id, function(resultado) {
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
CursoRuta.post('/curso', function(req, res) {
    var data = req.body;
    CursoModelo.create(data, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Editar un nuevo elemento 
CursoRuta.put('/curso', function(req, res) {
    var data = req.body;
    CursoModelo.edit(data, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});


CursoRuta.delete('/curso', function(req, res) {
    var noCurso = req.body;
    CursoModelo.delete(noCurso, function(resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = CursoRuta