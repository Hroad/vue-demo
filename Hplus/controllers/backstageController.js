//声明 后台控制器模板
var backstageController = {};

//登录页面
backstageController.login = function(req,res){
    //响应模板
    res.render('backstage/login');
}

//登录操作
backstageController.dologin = function(req,res){
     //跳转到后台首页
    res.redirect('/backstage');
}

//后台首页
backstageController.Index = function(req,res){
    //响应模板
    res.render('backstage/index');
}

var items = [
    { Id:'1', Username:'112safa3',Name:'Mr.123', Mobile:'02346120', Email:'540816@qq.com', Department:'研发部', RoleName:'开发', Password:'123321'},
    { Id:'2', Username:'2256',Name:'Mr.liang', Mobile:'145101', Email:'485980153@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'3', Username:'sdas3',Name:'Mr.456', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'4', Username:'4dsagfd',Name:'Mfafr.liang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'5', Username:'jhrhg5',Name:'Masfr.liandsadcg', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'6', Username:'hgfnje346',Name:'fasMfasf.lidsadang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321'},
];

//后台主要内容
backstageController.main = function(req,res){
    //响应模板
    res.render('backstage/main/main-m');
}
//用户管理
backstageController.user = function(req,res){
    //分配数据 响应模版

    res.render('backstage/main/user-m');
}
//项目管理
backstageController.useritem = function(req,res){
    // 请求数据
   var data={
        Data:items
    };
    res.send(data);
}
//添加用户
backstageController.userAdd = function(req,res){
    var id = req.body.Id;
    console.log(req.body.Id);
    console.log(id);
    var ret = {
        "State":true,
        "ErrorCode":0,
        "Message":"新建成功",
        "Data":null,
        "Pager":null
    };
    var json = {};
    json.Username = req.body.Username;
    json.Name = req.body.Name;
    json.Mobile = req.body.Mobile;
    json.Email = req.body.Email;
    json.Department = req.body.Department;
    json.RoleName = req.body.RoleName;
    json.Password = req.body.Password;
    items.unshift(json);
    res.send(ret);
}

//修改用户
backstageController.userEdit = function(req,res){
    var id = req.body.Id;
    var ret = {
        "State":true,
        "ErrorCode":0,
        "Message":"修改成功",
        "Data":null,
        "Pager":null
    };
    console.log(id);
    var index = -1;
    for(var i = 0;i<items.length; i++){
        if(items[i].Id == id){
            index = i;
        }
    }
    console.log(index);
    console.log(items);
    items.splice(index,1);
    items[index].Name = req.body.Name;
    items[index].Address = req.body.Address;
    items[index].ContactName = req.body.ContactName;
    items[index].ContactNumber = req.body.ContactNumber;
    items[index].Total = req.body.Total;
    items[index].Alarms = req.body.Alarms;
    items[index].Remark = req.body.Remark;
    res.send(ret);
}

//删除用户
backstageController.userDelete = function(req,res){
    var id = req.body.Id;
    // console.log(req.body.Id);
    console.log(id);
    var ret = {"State":true,"ErrorCode":0,"Message":"删除成功","Data":null, "Pager":  null};
    index = -1;
    for(var i = 0;i<items.length; i++){
        if(items[i].Id == id){
            index = i;
            break;
        }
    }
    console.log("Remove data at index : " + index);
    items.splice(index,1);
    res.send(ret);
}

//部门管理
backstageController.department = function(req,res){
    //响应模板
    res.render('backstage/main/department-m');
}
//角色管理
backstageController.role = function(req,res){
    //响应模板
    res.render('backstage/main/role-m');
}
//查询条件管理
backstageController.query = function(req,res){
    //响应模板
    res.render('backstage/main/query-m');
}
//暴露控制器
module.exports = backstageController;