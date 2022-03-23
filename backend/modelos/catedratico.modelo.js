var db = require("../database/db.config");
var catedratico = {};
catedratico.selectAll = function(callback) {
    if (db) {
        var consulta = "select * from catedratico";
        db.query(consulta, function(error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}
module.exports = catedratico;