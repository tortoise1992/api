const Router=require('koa-router')
const router=new Router()
const User=require('../controller/user')
/**
 * 用户登录接口
 */
router.post('/login',User.login)
/**
 * 获取用户信息接口
 */
router.get('/userInfo',User.userInfo)
module.exports=router
