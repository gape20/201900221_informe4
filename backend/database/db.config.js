var mysql = require("mysql");
var parametros = {
    host: "localhost",
    user: "root",
    password: "",
    database: "informe4"
}
var connection = mysql.createConnection(parametros);
module.exports = connection;