const mongoose = require("mongoose");
const Categoria = require("../../api/categoria/categoria.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const categorias = [
    {
        nombre:"Chupetín"
    },
    {
        nombre:"Prebenjamín"
    },
    {
        nombre:"Benjamín"
    },
    {
        nombre:"Infantil"
    },
    {
        nombre:"Cadete"
    },
    {
        nombre:"Juvenil"
    },
    {
        nombre:"Segunda Regional"
    },
    {
        nombre:"Primera Regional"
    },
    {
        nombre:"Tercera Nacional"
    },
    {
        nombre:"Segunda Nacional"
    },
    {
        nombre:"Primera Nacional"
    },
];

mongoose.connect(DB_URL).then(async () => {
    const allCategorias = await Categoria.find();
    if (allCategorias) {
        await Categoria.collection.drop().catch((error) => {console.log(error)});
    }
}).catch((error) => console.log("Error al borrar los registros de las categorías de la BBDD", error))
    .then(async () => {
        await Categoria.insertMany(categorias);
    }).catch((error) => console.log("Error al insertar las categorías en la BBDD", error))
    .finally(() => mongoose.disconnect());