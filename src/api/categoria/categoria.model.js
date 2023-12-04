const mongoose = require("moongose");
const categoriaSchema = mongoose.Schema({
    nombre:{type:String, required: true},
})
const categoria = mongoose.model("categorias", categoriaSchema);
module.exports = categoria;