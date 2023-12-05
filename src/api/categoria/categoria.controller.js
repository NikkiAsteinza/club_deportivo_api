const Categoria = require("./categoria.model");

const getCategorias = async (req,res,next)=>{
    try{
        const allCategorias = await Categoria.find();
        return res.json(allCategorias);
    }catch(error){
        return next(error);
    }
}
const setCategoria = async (req, res, next) => {
    try {
        const {nombre, tipo} = req.body;
         const newCategoria = new Categoria({nombre, tipo});
          await newCategoria.save().then(() => {
            return res.status(200).json("message : categoria creada:"+nombre);
          });

    } catch (error) {
        return next(error);
    }
}
module.exports = {getCategorias,setCategoria}