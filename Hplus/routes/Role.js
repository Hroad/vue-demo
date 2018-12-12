// /**
//  * Created by ljz on 2018/9/7.
//  */
// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
// var items=[
//     { Id:'1', Name:'孙尚香' },
//     { Id:'2', Name:'貂蝉' },
//     { Id:'3', Name:'吕布' },
//     { Id:'4', Name:'诸葛亮' },
//     { Id:'5', Name:'夏侯惇' },
//     { Id:'6', Name:'关于' },
//     { Id:'7', Name:'狄仁杰' },
//     { Id:'8', Name:'黄忠' },
//     { Id:'9', Name:'周瑜' },
//     { Id:'10', Name:'曹操' }
// ];
// router.get('/Lists', function(req, res, next) {
//     var data={
//       Data:items
//     };
//     res.send(data);
// });
// //删除
// router.post('/Delete', function(req, res, next) {
//     var id = req.body.Id;
//     var ret = {"State":true,"ErrorCode":0,"Message":"删除成功","Data":null, "Pager":  null};
//     index = -1;
//     for(var i = 0;i<items.length; i++){
//         if(items[i].Id == id){
//             index = i;
//             break;
//         }
//     }
//     console.log("Remove data at index : " + index);
//     items.splice(index,1);
//     res.send(ret);
// });
// //新增
// router.post('/Create',function (req, res, next) {
//     var id = req.body.Id;
//     var ret = {
//         "State":true,"ErrorCode":0,"Message":"新建成功","Data":null, "Pager":  null
//     };
//     var json = {};
//     json.Name = req.body.Name;
//     items.unshift(json);
//     res.send(ret);
// });
// router.post('/Edit', function(req, res, next) {
//     var id = req.body.Id;
//     var ret ={
//         "State":true,"ErrorCode":0,"Message":"新建成功","Data":null, "Pager":  null
//     };
//     var index = -1;
//     for(var i = 0;i<items.length; i++){
//         if(items[i].Id == id){
//             index = i;
//             break;
//         }
//     }
//     items[index].Name = req.body.Name;
//     res.send(ret);
// });
// module.exports = router;
