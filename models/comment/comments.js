const mongoose= require('mongoose')

const LoginSchema=new mongoose.Schema({
name:{
type:String,
required:true
},

email:{
type:String,
required:true
},

opinion:{
type:String,
required:true
},

});
const Comment= mongoose.model('Comment',LoginSchema);
module.exports=Comment