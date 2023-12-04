const CompeticionTipo = require("./competicion-tipo.model");

const getCompeticionTipos = async (req,res,next)=>{
    try{
        const allCompeticionTipoes = await CompeticionTipo.find();
        return res.json(allCompeticionTipoes);
    }catch(error){
        return next(error);
    }
}

module.exports = {getCompeticionTipos}