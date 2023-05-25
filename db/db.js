const mysql = require("mysql");

//Creamos conexion a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usuarios",
});

db.connect((err) => {
  if (err) {
    console.log("El error de la conexion es:" + err);
    return
  }
  console.log("Conectado a la base de datos");
});

module.exports = db;
