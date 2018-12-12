//前台路由

var express = require('express');
var router = express.Router();

//引入前台控制器
var receptionController = require('../controllers/receptionController');

//前台首页
router.get('/',receptionController.Index);

//登录操作
// router.post('/dologin',backstageController.dologin);

//退出操作
// router.get('/logout',backstageController.logout);

//登录页面
// router.get('/login',backstageController.login);

//暴露路由
module.exports = router;
