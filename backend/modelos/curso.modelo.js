var db = require("../database/db.config");
var curso = {};

//Seleccionar todos los elementos de una lista
curso.selectAll = function(callback) {
    if (db) {
        var consulta = "select * from curso";
        db.query(consulta, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        });
    }
}

//Seleccionar un solo elemento
curso.selectOne = function(id, callback) {
    if (db) {
        var consulta = 'select * from curso where idCurso = ?';
        db.query(consulta, id, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado[0]);
            }
        });
    }
}

//Crear un elemento
curso.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarCurso(?,?)"
        db.query(consulta, [data.idCurso, data.nombre], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        });
    }
}

//Editar un elemento
curso.edit = function(data, callback) {
    if (db) {
        var consulta = "call sp_EditarCurso(?,?)"
        db.query(consulta, [data.idCurso, data.nombre], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar un elemento
curso.delete = function(idCurso, callback) {
    if (db) {
        var consulta = "call sp_EliminarCurso(?)"
        db.query(consulta, idCurso, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}
module.exports = curso;