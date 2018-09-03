const Koa=require('koa')
const app=new Koa()
const Router=require('koa-router')
const config=require('./config/server')
const router=new Router()

router.get('/',ctx=>{
  ctx.body='test'
})

router.get('/test',ctx=>{
  ctx.body={
    name:"ahui"
  }
})
router.post('/test',ctx=>{
  ctx.body={
    name:"hahaha"
  }
})

app.use(router.routes()).use(router.allowedMethods())



app.listen(config.server.port)
console.log(`your server is runing at ${config.server.port}`)
