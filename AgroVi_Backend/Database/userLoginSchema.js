const mongoose = require('mongoose')


const userLoginSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
    }

})


module.exports = mongoose.model("userLogin", userLoginSchema);