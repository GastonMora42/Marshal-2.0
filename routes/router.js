const express = require("express");
const router = express.Router();

const db = require ("../db/db");
// Home page route. Todas las rutas que empiecen con /, se manejan en este archivo

const authController = require("../controllers/authController");

//router para las vistas
router.get("/", (req, res) => {
    db()
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/hub", (req, res) => {
  res.render("hub");
});



//Router para los metodos del controller
router.post("/register", authController.register)
router.post("/login", authController.login)
module.exports = router;
