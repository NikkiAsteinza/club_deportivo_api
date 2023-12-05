const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema(
    {
        nombre:{type:String, required: true},
        tipo:{type:mongoose.Types.ObjectID, ref: "categoria-tipos"},
    },
    {
        timestamps:true,
        collection:"categorias"
    }
);

const Categoria = mongoose.model("categorias", categoriaSchema);
module.exports = Categoria;