const { registro, login } = require("./usuario.controller");

const usuarioRoutes = require("express").Router();

usuarioRoutes.post("/",registro);
usuarioRoutes.post("/acceder",login);

module.exports = usuarioRoutes;