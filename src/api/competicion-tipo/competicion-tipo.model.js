const mongoose = require("moongose");
const competicionTipoSchema = mongoose.Schema({
    nombre:{type:String, required: true},
})
const competicionTipo = mongoose.model("competicion-tipos", competicionTipoSchema);
module.exports = competicionTipo;