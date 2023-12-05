const equipoRoutes = require("express").Router();
const {getEquipos} = require("./equipo.controller"); 
equipoRoutes.get("",getEquipos)
module.exports = equipoRoutes;