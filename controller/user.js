const jwt = require('jsonwebtoken')
const config=require('../config/server')
const User=require('../models/user')
module.exports={
  login:async (ctx,next)=>{
    const param=ctx.request.body
    // User.findByName(param.name)
    User.insert({
      username:'admin',
      password:'test'
    })
    if(param.name == 'ahui' && param.password == '123456'){

      const token = jwt.sign({
        id: 1,      // user_id
        name: param.name // user_name
      }, config.server.secret, { // 秘钥
          expiresIn: config.server.outTime // 过期时间
      });
      ctx.body = {             // 返回给前端
        token: token
      };
      ctx.status = 200;
    }else{
      ctx.body = {
        msg: '用户名或者密码错误'
      };
      ctx.status = 401;
    }
  },
  userInfo:async (ctx,next)=>{
    ctx.body={
      msg:'test text!'
    }
  }
}
