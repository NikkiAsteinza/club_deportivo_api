const mongoose = require("mongoose");
const equipoSchema = mongoose.Schema({
    nombre: {type:String,required: true},
    competicion:{type:mongoose.Types.ObjectID, ref: "competiciones", required:true},
    categoria:{type:mongoose.Types.ObjectID, ref: "categorias", required:true},
    temporada:{type:mongoose.Types.ObjectID, ref: "temporadas", required:true}
},
{
    timestamps:true,
    collection:"equipos"
})
const Equipo = mongoose.model("equipos", equipoSchema);
module.exports = Equipo;