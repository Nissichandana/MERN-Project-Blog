
const Mongoose = require('mongoose');
const loginSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const signup = Mongoose.model('SignUp', loginSchema)

module.exports = signup
