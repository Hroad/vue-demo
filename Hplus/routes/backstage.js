//后台路由

var express = require('express');
var router = express.Router();

//引入后台控制器
var backstageController = require('../controllers/backstageController');

//登录页面
router.get('/login',backstageController.login);

//后台首页
router.get('/',backstageController.Index);

//后台登录操作
router.post('/dologin',backstageController.dologin);

//后台主要内容
router.get('/main-m',backstageController.main);

//用户管理
router.get('/user-m',backstageController.user);

//项目管理
router.get('/useritem',backstageController.useritem);

//添加用户
router.post('/userAdd', backstageController.userAdd);

//修改用户
router.post('/userEdit', backstageController.userEdit);

//删除用户
router.post('/userDelete', backstageController.userDelete);

//部门管理
router.get('/department-m',backstageController.department);

//角色管理
router.get('/role-m',backstageController.role);

//查询条件管理
router.get('/query-m',backstageController.query);

//退出操作
// router.get('/logout',backstageController.logout);



//暴露路由
module.exports = router;