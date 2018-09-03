const Koa=require('koa')
const app=new Koa()
const Router=require('koa-router')
const koaBodyparser=require('koa-bodyparser')
const config=require('./config/server')
const router=new Router()
const userRouter=require('./routes/user')
router.use('/',userRouter.routes(),userRouter.allowedMethods())

app.use(koaBodyparser())
app.use(router.routes()).use(router.allowedMethods())



app.listen(config.server.port)
console.log(`your server is runing at ${config.server.port}`)
