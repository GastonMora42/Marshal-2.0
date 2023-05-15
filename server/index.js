const express = require("express");
const app = express();
const mysql = require("mysql");

const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usuarios",
});

app.post("/create", (req, res) => {
  const usuario = req.body.usuario;
  const marca = req.body.marca;
  const alcanze = req.body.alcanze;
  const rol = req.body.rol;
  const años = req.body.años;
  const objetivos = req.body.objetivos;

  db.query(
    "INSERT INTO usuarios (usuario, marca, alcanze, rol, años, objetivos) VALUES (?,?,?,?,?,?)",
    [usuario, marca, alcanze, rol, años, objetivos],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Usuario creado exitosamente");
      }
    }
  );
});

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
