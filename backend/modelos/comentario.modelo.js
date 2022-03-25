var db = require("../database/db.config");
var comentario = {};

//Seleccionar todos los elementos de una lista
comentario.selectAll = function(callback) {
    if (db) {
        var consulta = "select * from comentario";
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
comentario.selectOne = function(id, callback) {
    if (db) {
        var consulta = 'select * from comentario where idComentario = ?';
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
comentario.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarComentario(?,?)"
        db.query(consulta, [data.idUsuario, data.texto], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        });
    }
}

//Editar un elemento
comentario.edit = function(data, callback) {
    if (db) {
        var consulta = "call sp_EditarComentario(?,?,?)"
        db.query(consulta, [data.idComentario, data.idUsuario, data.texto], function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar un elemento
comentario.delete = function(id, callback) {
    if (db) {
        var consulta = "call sp_EliminarComentario(?)"
        db.query(consulta, id, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}
module.exports = comentario;