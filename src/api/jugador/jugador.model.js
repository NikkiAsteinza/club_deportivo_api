const mongoose = require("moongose");
const jugadorSchema = mongoose.Schema({

})
const jugador = mongoose.model("jugadores", jugadorSchema);
module.exports = jugador;