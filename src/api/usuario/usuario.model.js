const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
    {
        usuario:{type:String, unique:true, trim:true, required:true},
        pass:{type:String, trim:true, required:true}
    }
);

userSchema.pre("save", function(next){
    this.pass = bcrypt.hashSync(this.pass,10);
    next();
})

const User = mongoose.model("usuarios", userSchema);
module.exports = User;