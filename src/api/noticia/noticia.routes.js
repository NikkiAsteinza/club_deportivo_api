const { setNoticia, getNoticias } = require("./noticia.controller");

const noticiaRoutes = require("express").Router();

noticiaRoutes.post("/",setNoticia);
noticiaRoutes.get("/",getNoticias);

module.exports = noticiaRoutes;