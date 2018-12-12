//声明 前台控制器模板
var receptionController = {};

//前台首页
receptionController.Index = function(req,res){
    res.render('index',{'title':'我是前台首页，我棒棒的'});
}

//暴露控制器
module.exports = receptionController;