/**
 * Created by ljz on 2018/9/7.
 */
var data = {
    items:[],
    item:{},
    modifys:{ Id:'', Name:''}
}
var app = new Vue({
    el:'#app',
    data:data,
    methods:{
        Lists:function () {
            this.$http.get('/backstage/role-m').then(function(res){
                console.log(res.body);
                this.items = res.body.Data
            },function(){
                console.log('请求失败处理');
            });
        },
        Delete: function (id) {
            this.$http.post('/Role/Delete',
                {Id: id},{emulateJSON:true}).then(function (res) {
                app.Lists();
                console.log(res.body);
            },function () {
                console.log('请求失败')
            })
        },
        create: function () {
            var that = this;
            layer.open({
                type: 1,
                title: "新增",
                closeBtn: 0,
                shade: 0,
                shadeClose: false,
                area: ["680px", "450px"],
                skin: 'layui-layer-rim',
                content: $("#Added"),
                btn: ['保存', '取消'],
                zIndex: 990,
                yes: function (index) {
                    var data2 = {
                        Id:that.modifys.Id,
                        Name:that.modifys.Name,
                    };
                    that.$http.post('/Role/Create',
                        data2,
                        {emulateJSON:true}).then(function (res) {
                    });
                    console.log(data2);
                    layer.close(index);
                    app.Lists();
                },
                cancel: function (index) {
                    layer.close(index);
                }
            });
        },
        modify: function (item) //编辑
        {
            var that = this;
            this.modifys = item;
            layer.open({
                type: 1,
                title: "编辑",
                closeBtn: 0,
                shade: 0,
                shadeClose: false,
                area: ["500px", "430px"],
                skin: 'layui-layer-rim',
                content: $("#Editor"),
                btn: ['保存', '取消'],
                zIndex: 990,
                yes: function (index) {
                    var data3 = {
                        Id:that.modifys.Id,
                        Name:that.modifys.Name
                    };
                    that.$http.post('/Role/Edit',
                        data3,
                        {emulateJSON:true}).then(function (res) {
                    });
                    console.log(data3);
                    layer.close(index);
                    app.Lists();
                    return;
                },

                cancel: function (index) {
                    layer.close(index);
                }
            });
            app.$data.modifys = {
                Name : item.Name,
            };
        }
    }
});
app.Lists();