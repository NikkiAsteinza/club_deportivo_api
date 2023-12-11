const jwt = require("jsonwebtoken");
//! PARA GENERRAR TOKEN VARIABLE SECRETA
const generateSign = (id, usuario)=>{
    return  jwt.sign(
        {id, usuario},
        process.env.JWT_SECRET,
        {expiresIn:'30d'})
}
const verifyJwt = (token)=>{
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {generateSign,verifyJwt}