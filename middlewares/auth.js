const jwt = require('jsonwebtoken')
module.exports=async (ctx,next)=>{
  if(ctx.request.url !== '/login'){
    const token=ctx.get('token')
    next()
  }
}
