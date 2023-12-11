const Noticia = require("./noticia.model");

const getNoticias = async(req,res,next)=>{
    try {
        const allNoticias = await Noticia.find();
        return res.json(allNoticias);
    } catch (error) {
        next(error);
    }
}

const setNoticia = async(req,res,next)=>{
    try {
        const newNoticia = new Noticia(req.body);
        await newNoticia.save().then(()=>{
            return res.status(200).json("message: noticia creada");
        })
        
    } catch (error) {
        next(error);
    }
}

module.exports = {getNoticias, setNoticia}