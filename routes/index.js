var homeRouter=require('./home')
var userRouter=require('./user')

module.exports = function(app){
  app.use('/',homeRouter)
  app.use('/user',userRouter)
};
