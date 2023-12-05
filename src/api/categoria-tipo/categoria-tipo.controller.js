const CategoriaTipo = require("./categoria-tipo.model");

const getCategoriaTipos = async (req,res,next)=>{
    try{
        const allCategoriaTipoes = await CategoriaTipo.find();
        return res.json(allCategoriaTipoes);
    }catch(error){
        return next(error);
    }
}

module.exports = {getCategoriaTipos}