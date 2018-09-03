const Koa=require('koa')
const app=new Koa()
const Router=require('koa-router')
const koaBodyparser=require('koa-bodyparser')
const router=new Router()
const mongoose=require('mongoose')
const config=require('./config/server'),dbConfig=require('./config/db')
const userRouter=require('./routes/user')
const auth=require('./middlewares/auth')

try{
  mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`,{ useNewUrlParser: true });
  console.log('数据库链接成功')
}catch(err){
  console.log(`数据库链接失败，请检查,${err}`)
}
app.use(koaBodyparser())
app.use(auth)

router.use('/',userRouter.routes(),userRouter.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(config.server.port)
console.log(`your server is runing at ${config.server.port}`)
