const {getEquipos} = require("./equipo.controller"); 
const equipoRoutes = require("express").Router();

equipoRoutes.get("/",getEquipos)

module.exports = equipoRoutes;