const mongoose = require("mongoose");
const competicionTipoSchema = mongoose.Schema({
    nombre:{type:String, required: true},
},
{
    timestamps:true,
    collection:"competicion-tipos"
})
const competicionTipo = mongoose.model("competicion-tipos", competicionTipoSchema);
module.exports = competicionTipo;