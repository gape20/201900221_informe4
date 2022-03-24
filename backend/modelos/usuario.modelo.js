var db = require("../database/db.config");
var usuario = {};

//Seleccionar todos los elementos de una lista
usuario.selectAll = function(callback) {
    if (db) {
        var consulta = "select * from usuario";
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
usuario.selectOne = function(id, callback) {
    if (db) {
        var consulta = 'select * from usuario where idUsuario = ?';
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
usuario.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarUsuario(?,?,?,?,?)"
        db.query(consulta, [data.idUsuario, data.nombre, data.apellido, data.contraseña, data.correo], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        });
    }
}
module.exports = usuario;