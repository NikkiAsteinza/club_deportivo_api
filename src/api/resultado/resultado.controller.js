const Resultado = require("./resultado.model");

const getResultados = async(req,res,next)=>{
    try {
        const allResultados = await Resultado.find();
        return res.json(allResultados);
    } catch (error) {
        return next(error);
    }
}

const setResultado = async(req,res,next){
    try {
       const newResultado = new Resultado(req.body);
       await newResultado.save().then(()=>{
            return res.status(200).json("message: resultado creado");
       })  
    } catch (error) {
        return next(error);
    }
}

module.exports = {getResultados,setResultado}