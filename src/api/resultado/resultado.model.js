const mongoose = require("mongoose");
const resultadoSchema = mongoose.Schema({
    visitante: {type:String,required: true},
    local:{type:mongoose.Types.ObjectID, ref: "equipos", required:true},
    golesVisitante:{type:Number, required:true},
    golesLocal:{type:Number, required:true},
    temporada:{type:mongoose.Types.ObjectID, ref: "temporadas", required:true},
    cronica:{type:String, required:true}
},
{
    timestamps:true,
    collection:"resultados"
})
const resultado = mongoose.model("resultados", resultadoSchema);
module.exports = resultado;