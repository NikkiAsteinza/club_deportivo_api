const { setCategoria, getCategorias } = require("./categoria.controller");

const categoriaRoutes = require("express").Router();

categoriaRoutes.get("/",getCategorias);
categoriaRoutes.post("/",setCategoria);

module.exports = categoriaRoutes;