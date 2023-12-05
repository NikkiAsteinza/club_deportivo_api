const mongoose = require("mongoose");
const temporadaSchema = mongoose.Schema({
    inicio: {type: String, required:true},
    fin: {type: String, required:true}
},
{
    timestamps:true,
    collection:"temporadas"
})
const temporada = mongoose.model("temporadas", temporadaSchema);
module.exports = temporada;