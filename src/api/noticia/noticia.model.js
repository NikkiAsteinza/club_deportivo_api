const mongoose = require("moongose");
const noticiaSchema = mongoose.Schema({
    titulo: {type:String, required:true},
    contenido:{type:String, required:true}
})
const noticia = mongoose.model("noticias", noticiaSchema);
module.exports = noticia;