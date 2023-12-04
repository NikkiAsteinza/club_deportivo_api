const Jugador = require("./jugador.model");

const getJugadores = async (req,res,next)=>{
    try{
        const allJugadors = await Jugador.find();
        return res.json(allJugadors);
    }catch(error){
        return next(error);
    }
}

module.exports = {getJugadores}