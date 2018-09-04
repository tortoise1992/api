var homeRouter=require('./home')
var userRouter=require('./user')
var loginRouter=require('./login')
var authMiddleware=require('../middlewares/auth')
module.exports = function(app){
  app.use('/login',loginRouter)
  app.use('/',authMiddleware,homeRouter)
  app.use('/user',authMiddleware,userRouter)
};
