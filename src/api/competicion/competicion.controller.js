const Competicion = require("./competicion.model");

const getCompeticiones = async (req,res,next)=>{
    try{
        const allCompeticiones = await Competicion.find();
        return res.json(allCompeticiones);
    }catch(error){
        return next(error);
    }
}
const setCompeticion =async(req, res, next)=>{
    try{
        const{nombre, tipo, temporada, jornadas}= req.body;
        const newCompeticion = new Competicion({nombre,tipo,temporada,jornadas})
        
        await newCompeticion.save().then(()=>{
            return res.status(200).json("message : competicion creada:"+nombre);
        });

  } catch (error) {
      return next(error);
  }
}
module.exports = {getCompeticiones, setCompeticion}