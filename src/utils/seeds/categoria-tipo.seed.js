const mongoose = require("mongoose");
const CategoriaTipo = require("../../api/categoria-tipo/categoria-tipo.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const CategoriaTipos = [
    {
        nombre:"Femenina"
    },
    {
        nombre:"Masculina"
    },
    {
        nombre:"Mixta"
    },
];

mongoose.connect(DB_URL).then(async () => {
    const allCategoriaTipos = await CategoriaTipo.find();
    if (allCategoriaTipos) {
        await CategoriaTipo.collection.drop().catch((error) => {console.log(error)});
    }
}).catch((error) => console.log("Error al borrar los registros de los tipos de categorías de la BBDD", error))
    .then(async () => {
        await CategoriaTipo.insertMany(CategoriaTipos);
    }).catch((error) => console.log("Error al insertar los tipos de categorías en la BBDD", error))
    .finally(() => mongoose.disconnect());