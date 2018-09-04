var jwt=require('jsonwebtoken')
var config=require('../config/config')
var whiteList=require('../config/whiteList')
module.exports=function(req,res,next){
  var token=req.headers['token']
  jwt.verify(token,config.server.serect,function(err,item){
    if(err){
      res.json({
        ret:401,
        msg:err['message']
      })
    }else{
      req.query.userid=item.userid
      next()
    }
  })

}
