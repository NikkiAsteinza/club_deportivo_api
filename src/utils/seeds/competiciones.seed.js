const mongoose = require("mongoose");
const Competicion = require("../../api/competicion/competicion.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const Competiciones = [
    {
        //Federados
        nombre: "Juvenil",
        tipo:"656e7a320039b1dca0336958",
        temporada:"656e7a5480688977ce9d3a7e",
         
    },
    {
        nombre: "Primera Regional",
        tipo:"656e7a320039b1dca0336958",
        temporada:"656e7a5480688977ce9d3a7e",
         
    },
    {
        nombre: "Tercera nacional",
        tipo:"656e7a320039b1dca0336958",
        temporada:"656e7a5480688977ce9d3a7e",
    },
    {
        // ADS
        nombre: "Benjamín",
        tipo:"656e7a320039b1dca0336957",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Alevín",
        tipo:"656e7a320039b1dca0336957",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Infantil",
        tipo:"656e7a320039b1dca0336957",
        temporada:"656e7a5480688977ce9d3a7e",
    },
    {
        nombre: "Cadete",
        tipo:"656e7a320039b1dca0336957",
        temporada:"656e7a5480688977ce9d3a7e",
    },
    {
        nombre: "Juvenil",
        tipo:"656e7a320039b1dca0336957",
        temporada:"656e7a5480688977ce9d3a7e",
    },
    {
        // Municipales
        nombre: "Prebenjamín A",
        tipo:"656e7a320039b1dca0336959",
        temporada:"656e7a5480688977ce9d3a7e",
    },
    {
        nombre: "Prebenjamín B",
        tipo:"656e7a320039b1dca0336959",
        temporada:"656e7a5480688977ce9d3a7e",
    },
];

mongoose.connect(DB_URL).then(async () => {
    const allCompeticiones = await Competicion.find();
    if (allCompeticiones) {
        await Competicion.collection.drop().catch((error) => {console.log(error)});
    }
}).catch((error) => console.log("Error al borrar los registros de las Competiciones de la BBDD", error))
    .then(async () => {
        await Competicion.insertMany(Competiciones);
    }).catch((error) => console.log("Error al insertar las Competiciones en la BBDD", error))
    .finally(() => mongoose.disconnect());