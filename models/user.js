const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
  username:{
    type:String
  },
  password:{
    type:String
  }
},{collection:'user'})

const userModel=mongoose.model('user',userSchema)

module.exports={
  findByName:name=>{
    userModel.find((err,record)=>{
      if(err) console.log(err)
      console.log(record)
    })
  },
  insert:obj=>{
    userModel.create(obj);
  }
}
