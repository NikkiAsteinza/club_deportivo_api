const { getCompeticionTipos } = require("./competicion-tipo.controller");

const competicionTipoRoutes = require("express").Router();
competicionTipoRoutes.get("/",getCompeticionTipos);

module.exports = competicionTipoRoutes;