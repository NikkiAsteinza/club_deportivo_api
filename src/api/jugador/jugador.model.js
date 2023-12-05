const mongoose = require("mongoose");
const jugadorSchema = mongoose.Schema({

},
{
    timestamps:true,
    collection:"jugadores"
})
const jugador = mongoose.model("jugadores", jugadorSchema);
module.exports = jugador;