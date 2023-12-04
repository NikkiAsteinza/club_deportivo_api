const mongoose = require("moongose");
const temporadaSchema = mongoose.Schema({
    inicio: {type: String, required:true},
    fin: {type: String, required:true}
})
const temporada = mongoose.model("temporadas", temporadaSchema);
module.exports = temporada;