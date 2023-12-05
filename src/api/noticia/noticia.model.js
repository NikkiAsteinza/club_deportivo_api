const mongoose = require("mongoose");
const noticiaSchema = mongoose.Schema({
    titulo: {type:String, required:true},
    contenido:{type:String, required:true}
},
{
    timestamps:true,
    collection:"noticias"
})
const noticia = mongoose.model("noticias", noticiaSchema);
module.exports = noticia;