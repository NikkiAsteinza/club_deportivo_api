const { isAuth } = require("../../middlewares/auth");
const { setCompeticion, getCompeticiones } = require("./competicion.controller");

const competicionRoutes = require("express").Router();

competicionesRoutes.post("/",[isAuth],setCompeticion);
competicionesRoutes.get("/", getCompeticiones);

module.exports = competicionRoutes;