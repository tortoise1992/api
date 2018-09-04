var User=require('../models/user')
var jwt=require('jsonwebtoken')
var config=require('../config/config')
module.exports={
  login:function(req,res,next){
    var username=req.body.username,password=req.body.password
    User.find({username},function(err,doc){
      if(!err){
        if(doc.length>0){
          if(doc[0].password == password){
            res.json({
              code:200,
              msg:'恭喜你，登录成功'
            })
          }else{
            res.json({
              code:200,
              msg:'密码错误'
            })
          }
        }else{
          res.json({
            code:200,
            msg:'用户名不存在'
          })
        }
      }else{
        console.log(err)
      }
    })
  },
  userInfo:function(name){
    return function(req,res,next){

    }
  }
}
