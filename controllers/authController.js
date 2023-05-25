const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../db/db.js");
const { promisify } = require("util");
const { compileFunction } = require("vm");

//Metodo para registrarse
exports.register = async (req, res) => {
  try {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    const celular = req.body.celular;

    const passHash = await bcryptjs.hash(password, 8);

    conexion.query(
      "INSERT INTO users SET ?",
      {
        name: name,
        lastname: lastname,
        user: user,
        password: passHash,
        email: email,
        celular: celular,
      },
      (error, results) => {
        if (error) {
          console.log("Ocurrio un error" + error);
        }
        res.redirect("/hub");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.render("login", {
        alert: true,
        msg: "Por favor ingrese todos los datos",
        alertTitle: "Asvertencia",
        Icon: "info",
        showConfirmButton: true,
        timer: false,
        ruta: "login",
      }); 
    }
  } catch (error) {
    console.log(error);
  }
};
