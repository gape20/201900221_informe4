var db = require("../database/db.config");
var catedratico = {};

//Seleccionar todos los elementos de una lista
catedratico.selectAll = function(callback) {
    if (db) {
        var consulta = "select * from catedratico";
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
catedratico.selectOne = function(id, callback) {
    if (db) {
        var consulta = 'select * from catedratico where idCatedratico = ?';
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
catedratico.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarCatedratico(?,?,?)"
        db.query(consulta, [data.idCatedratico, data.nombre, data.idCurso], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        });
    }
}

//Editar un elemento
catedratico.edit = function(data, callback) {
    if (db) {
        var consulta = "call sp_EditarCatedratico(?,?,?)"
        db.query(consulta, [data.idCatedratico, data.nombre, data.idCurso], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar un elemento
catedratico.delete = function(id, callback) {
    if (db) {
        var consulta = "call sp_EliminarCatedratico(?)"
        db.query(consulta, id, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}
module.exports = catedratico;