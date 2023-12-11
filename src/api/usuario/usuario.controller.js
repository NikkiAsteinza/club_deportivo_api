const { generateSign } = require("../../utils/jwt");
const User = require("./usuario.model");
const bcrypt = require('bcrypt');

const registro = async (req,res,next)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save().then(() => {
            return res.status(200).json("message : categoria creada:"+newUser);
          });
    } catch (error) {
        next(error);
    }
}

const login = async (req,res,next)=>{
    try {
        console.log(req.body);
        const existingUser = await User.findOne({usuario:req.body.usuario});
        console.log(existingUser.usuario);
        if(!existingUser){
            return res.status(500).json("No se encuentra este usuario");
        }
        if(bcrypt.compareSync(req.body.pass, existingUser.pass)){
            const token = generateSign(existingUser._id, existingUser.usuario);
            return res.status(200).json({token,existingUser});
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = {registro, login}