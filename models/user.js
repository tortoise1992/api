var mongoose=require('mongoose')
var Schema=mongoose.Schema
var userSchema=new Schema({
  username:String,
  password:{
    type:String,
    default:'123456'
  },
  email:String
},{collection:'user'})

var User=mongoose.model('user',userSchema)
module.exports=User
