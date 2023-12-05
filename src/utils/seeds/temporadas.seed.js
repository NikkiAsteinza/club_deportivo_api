const mongoose = require("mongoose");
const Temporada = require("../../api/temporada/temporada.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const Temporadas = [
    {
        inicio:"2023",
        fin:"2024"
    },
];

mongoose.connect(DB_URL).then(async () => {
    const allTemporadas = await Temporada.find();
    if (allTemporadas) {
        await Temporada.collection.drop().catch((error) => {console.log(error)});
    }
}).catch((error) => console.log("Error al borrar los registros de las temporadas de la BBDD", error))
    .then(async () => {
        await Temporada.insertMany(Temporadas);
    }).catch((error) => console.log("Error al insertar las temporadas en la BBDD", error))
    .finally(() => mongoose.disconnect());