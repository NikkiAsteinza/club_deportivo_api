const mongoose = require("mongoose");
const Equipo = require("../../api/equipo/equipo.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const Equipos = [
    {
        //Federados
        nombre: "Juvenil",
        competicion: "656f628fa84391e3e553561f",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8b9",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Primera Regional",
        competicion: "656f628fa84391e3e5535620",
        categoria:"656e7a5cfa0cec28bdfaf743",
        tipo: "656e7c04521d86ce4eb0e8b8",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Tercera nacional",
        competicion: "656f628fa84391e3e5535621",
        categoria:"656e7a5cfa0cec28bdfaf744",
        tipo:"656e7c04521d86ce4eb0e8b9",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        // ADS
        nombre: "Benjamín A",
        competicion: "656f628fa84391e3e5535622",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Benjamín B",
        competicion: "656f628fa84391e3e5535622",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Benjamín Navacerrada",
        competicion: "656f628fa84391e3e5535622",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Alevín Navacerrada A",
        competicion: "656f628fa84391e3e5535623",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Alevín",
        competicion: "656f628fa84391e3e5535623",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Alevín Navacerrada B",
        competicion: "656f628fa84391e3e5535623",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Infantil A",
        competicion: "656f628fa84391e3e5535624",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8b9",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Infantil B",
        competicion: "656f628fa84391e3e5535624",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8b9",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Cadete",
        competicion: "656f628fa84391e3e5535625",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8b9",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Juvenil",
        competicion: "656f628fa84391e3e5535626",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8b9",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        // Municipales
        nombre: "Prebenjamín A",
        competicion: "656f628fa84391e3e5535627",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
    {
        nombre: "Prebenjamín B",
        competicion: "656f628fa84391e3e5535627",
        categoria:"656e7a5cfa0cec28bdfaf741",
        tipo:"656e7c04521d86ce4eb0e8ba",
        temporada:"656e7a5480688977ce9d3a7e"
    },
];

mongoose.connect(DB_URL).then(async () => {
    const allEquipos = await Equipo.find();
    if (allEquipos) {
        await Equipo.collection.drop().catch((error) => {console.log(error)});
    }
}).catch((error) => console.log("Error al borrar los registros de las Equipos de la BBDD", error))
    .then(async () => {
        await Equipo.insertMany(Equipos);
    }).catch((error) => console.log("Error al insertar las Equipos en la BBDD", error))
    .finally(() => mongoose.disconnect());