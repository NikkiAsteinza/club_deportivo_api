const { getCategoriaTipos } = require("./categoria-tipo.controller");

const categoriaTipoRoutes = require("express").Router();

categoriaTipoRoutes.get("/",getCategoriaTipos);

module.exports = categoriaTipoRoutes;