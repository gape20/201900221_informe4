var db = require("../database/db.config");
var publicacion = {};

//Seleccionar todos los elementos de una lista
publicacion.selectAll = function(callback) {
    if (db) {
        var consulta = "select * from publicacion";
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
publicacion.selectOne = function(id, callback) {
    if (db) {
        var consulta = 'select * from publicacion where idPublicacion = ?';
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
publicacion.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarPublicacion(?,?,?,?)"
        db.query(consulta, [data.idUsuario, data.idCurso, data.texto, data.fecha], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        });
    }
}

//Editar un elemento
publicacion.edit = function(data, callback) {
    if (db) {
        var consulta = "call sp_EditarPublicacion(?,?,?,?,?)"
        db.query(consulta, [data.idPublicacion, data.idUsuario, data.idCurso, data.texto, data.fecha], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar un elemento
publicacion.delete = function(id, callback) {
    if (db) {
        var consulta = "call sp_EliminarPublicacion(?)"
        db.query(consulta, id, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}
module.exports = publicacion;