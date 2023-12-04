const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connectDB =async()=>{
    try{
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        const {host} = db.connection;
        console.log("Conexión establecida con BBDD "+ host);
    }catch(error){
        console.log("Error intentando contactar con BBDD");
    }
}

module.exports = {connectDB};