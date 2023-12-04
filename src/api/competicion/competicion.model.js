const mongoose = require("moongose");
const competicionSchema = mongoose.Schema({
    nombre:{type:String, required: true},
    tipo:{type:mongoose.Types.ObjectID, ref: "competition-tipos", required:true},
    temporada:{type:mongoose.Types.ObjectID, ref: "temporada", required:true},
    jornadas:{type:Number, required:true}
})
const Competicion = mongoose.model("competiciones", competicionSchema);
module.exports = Competicion;