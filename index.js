require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;

// Get routes
const categoriaRoutes = require("./src/api/categoria/categoria.routes.js");
const categoriaTipoRoutes = require("./src/api/categoria-tipo/categoria-tipo.routes.js");
const competicionRoutes = require("./src/api/competicion/competicion.routes.js");
const competicionTiposRoutes = require("./src/api/competicion-tipo/competicion-tipo.routes.js");
const equipoRoutes = require("./src/api/equipo/equipo.routes.js");
const jugadorRoutes = require("./src/api/jugador/jugador.routes.js");
const noticiaRoutes = require("./src/api/noticia/noticia.routes.js");
const resultadoRoutes = require("./src/api/resultado/resultado.routes.js");
const temporadaRoutes = require("./src/api/temporada/temporada.routes.js");
const userRoutes = require("./src/api/usuario/usuario.routes.js");
// Init server

// const hbs = require("hbs");
const bodyParser = require('body-parser');
// create application/json parser
const jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Mongoose
//* Me traigo mi base de datos
const db = require("./src/utils/db.js");

//* Estoy ejecutando la función connectDB de mi archivo db.js que se encuentra en ./src/utils/db.js
db.connectDB();

// To create the server we need to run the express lib
const server = express();

//CORS
server.use(cors());
server.use(jsonParser);
server.use(urlencodedParser);


// Api routes

server.use("/categorias",categoriaRoutes);
server.use("/categoria-tipos",categoriaTipoRoutes);
server.use("/competiciones",competicionRoutes);
server.use("/competicion-tipos",competicionTiposRoutes);
server.use("/equipos",equipoRoutes);
server.use("/jugadores",jugadorRoutes);
server.use("/noticias",noticiaRoutes);
server.use("/resultados",resultadoRoutes);
server.use("/temporada",temporadaRoutes);
server.use("/usuario",userRoutes);

server.use("/", (req, res) => {
    res.send("Funcionando");
});

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Error inesperado");
});

server.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
});

server.listen(PORT, ()=>{
    console.log("Server listening on http://localhost:"+PORT)
})