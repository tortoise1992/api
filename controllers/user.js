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
            var token=jwt.sign({
              userid:doc['_id'],
              username,
              password,
            },config.server.serect,{
              expiresIn:config.server.outTime
            })

            res.json({
              ret:200,
              data:{
                list:doc
              },
              msg:'登录成功',
              token:token,
            })
          }else{
            res.json({
              ret:0,
              msg:'密码错误'
            })
          }
        }else{
          res.json({
            ret:0,
            msg:'用户名不存在'
          })
        }
      }else{
        console.log(err)
      }
    })
  },
  userInfo:function(req,res,next){
    var username=req.query.username
    res.json({
      data:[
        {msg:'test'}
      ]
    })
  }
}
