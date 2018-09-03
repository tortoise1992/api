const Router=require('koa-router')
const router=new Router()
const jwt = require('jsonwebtoken')
/**
 * 用户登录接口
 */
router.post('login',async (ctx,next)=>{
  const param=ctx.request.body
  if(param.name == 'ahui' && param.password == '123456'){
    const token = jwt.sign({
      id: 1,      // user_id
      name: param.name // user_name
    }, 'shenzhouhaotian', { // 秘钥
        expiresIn: '60s' // 过期时间
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

})
/**
 * 获取用户信息接口
 */
router.get('userInfo',async (ctx,next)=>{
  const authorization = ctx.get('Authorization');

  ctx.body={

  }
})
module.exports=router
