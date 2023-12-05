const mongoose = require("mongoose");
const CompeticionTipo = require("../../api/competicion-tipo/competicion-tipo.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const CompeticionTipos = [
    {
        nombre:"N/A"
    },
    {
        nombre:"Municipal"
    },
    {
        nombre:"ADS"
    },
    {
        nombre:"Federado"
    },
    {
        nombre:"Municipal"
    },
];

mongoose.connect(DB_URL).then(async () => {
    const allCompeticionTipos = await CompeticionTipo.find();
    if (allCompeticionTipos) {
        await CompeticionTipo.collection.drop().catch((error) => {console.log(error)});
    }
}).catch((error) => console.log("Error al borrar los registros de los tipos de competición de la BBDD", error))
    .then(async () => {
        await CompeticionTipo.insertMany(CompeticionTipos);
    }).catch((error) => console.log("Error al insertar los tipos de competición en la BBDD", error))
    .finally(() => mongoose.disconnect());