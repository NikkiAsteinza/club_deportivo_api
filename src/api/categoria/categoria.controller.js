const Categoria = require("./categoria.model");

const getCategorias = async (req,res,next)=>{
    try{
        const allCategorias = await Categoria.find();
        return res.json(allCategorias);
    }catch(error){
        return next(error);
    }
}

module.exports = {getCategorias}