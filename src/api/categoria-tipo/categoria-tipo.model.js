const mongoose = require("mongoose");
const categoriaTipoSchema = mongoose.Schema({
    nombre:{type:String, required: true}
},
{
    timestamps:true,
    collection:"categoria-tipos"
})
const CategoriaTipo = mongoose.model("categoria-tipos", categoriaTipoSchema);
module.exports = CategoriaTipo;