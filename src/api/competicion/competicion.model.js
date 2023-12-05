const mongoose = require("mongoose");

const competicionSchema = mongoose.Schema(
    {
        nombre:{type:String, required: true},
        tipo: {type: mongoose.Schema.Types.ObjectId,  ref: 'competicion-tipos', required:true},
        temporada:{type:mongoose.Schema.Types.ObjectID, ref: "temporada", required:true},
        jornadas:{type:Number, required:false, default:30}
    },
    {
        timestamps:true,
        collection:"competiciones"
    });

const Competicion = mongoose.model("competiciones", competicionSchema);

module.exports = Competicion;