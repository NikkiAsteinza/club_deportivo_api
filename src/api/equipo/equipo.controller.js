const Equipo = require("./equipo.model");

const getEquipos = async (req,res,next)=>{
    try{
        const allEquipos = await Equipo.find();
        return res.json(allEquipos);
    }catch(error){
        return next(error);
    }
}

module.exports = {getEquipos}