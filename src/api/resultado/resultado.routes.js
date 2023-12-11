const { getResultados, setResultado } = require("./resultado.controller");

const resultadoRoutes = require("express").Router();

resultadoRoutes.get("/", getResultados);
resultadoRoutes.post("/", setResultado);

module.exports = resultadoRoutes;