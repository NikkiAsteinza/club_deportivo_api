const User = require("../api/usuario/usuario.model");
const { verifyJwt } = require("../utils/jwt");

const isAuth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            res.json("No se ha recibido ningún token");
        }
        const parsedToken = token.replace("Bearer ","");
        const validToken =verifyJwt(parsedToken);
        const targetUser = await User.findById(validToken.id)
        targetUser.pass = null;
        req.user = targetUser;

        next();
        
    } catch (error) {
        return res.json(error);
    }
}

module.exports = {isAuth}