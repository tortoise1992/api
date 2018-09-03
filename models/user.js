const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
  username:{
    type:String
  },
  password:{
    type:String
  }
})

const userModel=mongoose.model('user',userSchema)

module.exports={
  findByName:async name=>{
    const record=await userModel.find({username:name});
    console.log(record)
  }
}
