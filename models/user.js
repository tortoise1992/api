var mongoose=require('mongoose')
var Schema=mongoose.Schema
var userSchema=new Schema({
  username:String,
  password:{
    type:String,
    default:'123456'
  },
  email:String,
  create_time:Date,
  update_time:Date,
  roles:{
    type:Array,
    default:[]
  },
  is_normal:{
    type:Boolean,
    default:true
  }
},{collection:'user'})

var User=mongoose.model('user',userSchema)
module.exports=User
