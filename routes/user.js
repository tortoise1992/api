var express = require('express');
var router = express.Router();
var userController=require('../controllers/user')
/* GET users listing. */

router.get('/userinfo',userController.userInfo)
router.post('/add',userController.add)
module.exports = router;
