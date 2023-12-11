const { isAuth } = require("../../middlewares/auth");
const { setCategoria, getCategorias } = require("./categoria.controller");

const categoriaRoutes = require("express").Router();

categoriaRoutes.get("/",getCategorias);
categoriaRoutes.post("/",[isAuth],setCategoria);

module.exports = categoriaRoutes;