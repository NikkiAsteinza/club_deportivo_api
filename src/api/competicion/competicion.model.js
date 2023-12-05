const mongoose = require("mongoose");

const competicionSchema = mongoose.Schema(
    {
        nombre:{type:String, required: true},
        tipo:{type:mongoose.Types.ObjectID, ref: "competicion-tipos", required:true},
        temporada:{type:mongoose.Types.ObjectID, ref: "temporada", required:true},
        jornadas:{type:Number, required:true}
    },
    {
        timestamps:true,
        collection:"competiciones"
    });

const Competicion = mongoose.model("competiciones", competicionSchema);

module.exports = Competicion;