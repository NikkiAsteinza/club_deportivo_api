const mongoose = require("mongoose");
const equipoSchema = mongoose.Schema({
    nombre: {type:String,required: true},
    competicion:{type:mongoose.Schema.Types.ObjectID, ref: "competiciones", required:true},
    categoria:{type:mongoose.Schema.Types.ObjectID, ref: "categorias", required:true},
    tipo: {type: mongoose.Schema.Types.ObjectId,  ref: 'categoria-tipos', required:true},
    temporada:{type:mongoose.Schema.Types.ObjectID, ref: "temporadas", required:true}
},
{
    timestamps:true,
    collection:"equipos"
})
const Equipo = mongoose.model("equipos", equipoSchema);
module.exports = Equipo;