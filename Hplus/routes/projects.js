var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
var items = [
    { Id:'1', Username:'112safa3',Name:'Mr.123', Mobile:'02346120', Email:'540816@qq.com', Department:'研发部', RoleName:'开发', Password:'123321'},
    { Id:'2', Username:'2256',Name:'Mr.liang', Mobile:'145101', Email:'485980153@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'3', Username:'sdas3',Name:'Mr.456', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'4', Username:'4dsagfd',Name:'Mfafr.liang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'5', Username:'jhrhg5',Name:'Masfr.liandsadcg', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'6', Username:'hgfnje346',Name:'fasMfasf.lidsadang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321'},
    { Id:'7', Username:'gfsdfbw7',Name:'Mr.lidsadaang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'8', Username:'fdsv38',Name:'fasfMr.dasd dg', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'9', Username:'9fqef',Name:'Mr.dasd', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'10', Username:'2fds13',Name:'fafMr.ldasfiang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'11', Username:'31fa2',Name:'Mfasfr.lidasasdang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'12', Username:'4fa15',Name:'Mr.liang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' },
    { Id:'13', Username:'440883',Name:'Mr.lcxzcaang', Mobile:'17665179602', Email:'1109447424@qq.com', Department:'研发部', RoleName:'开发', Password:'123321' }
];
router.get('/Lists', function(req, res, next) {
    var data={
        Data:items
    };
    res.send(data);
});
//新增
router.post('/Create',function (req, res, next) {
    var id = req.body.Id;
    var ret = {"State":true,"ErrorCode":0,"Message":"新建成功","Data":null, "Pager":  null};
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
});
//编辑
router.post('/Edit',function (req, res, next) {
    var id = req.body.Id;
    var ret = {"State":true,"ErrorCode":0,"Message":"修改成功","Data":null, "Pager":  null};
    var index = -1;
    for(var i = 0;i<items.length; i++){
        if(items[i].Id == id){
            index = i;
            break;
        }
    }
    items[index].Name = req.body.Name;
    items[index].Address = req.body.Address;
    items[index].ContactName = req.body.ContactName;
    items[index].ContactNumber = req.body.ContactNumber;
    items[index].Total = req.body.Total;
    items[index].Alarms = req.body.Alarms;
    items[index].Remark = req.body.Remark;
    res.send(ret);
});

//删除
router.post('/Delete', function(req, res, next) {
    var id = req.body.Id;
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
});
module.exports = router;