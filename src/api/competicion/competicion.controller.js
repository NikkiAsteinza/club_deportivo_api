const Competicion = require("./competicion.model");

const getCompeticions = async (req,res,next)=>{
    try{
        const allCompeticiones = await Competicion.find();
        return res.json(allCompeticiones);
    }catch(error){
        return next(error);
    }
}

module.exports = {getCompeticions}