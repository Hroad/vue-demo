var app = new Vue({
    el:"#app",
    data: {
        item:{},
        modifys:{ Id: '99', Username: '', Name: '', Mobile: '', Email:'', Department: '', RoleName:'' ,Password: ''},
        activeItem:{},
        items:[]
    },
    methods: {
        Lists:function () {
            this.$http.get('/backstage/useritem').then(function(res){
                console.log(res.body);
                this.items = res.body.Data
            },function(){
                console.log('请求失败处理');
            });
        },
        Delete: function (id) {
            this.$http.post('/backstage/userDelete',{Id: id},{emulateJSON:true}).then(function (res) {
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
                        Username:that.modifys.Username,
                        Name:that.modifys.Name,
                        Mobile:that.modifys.Mobile,
                        Email:that.modifys.Email,
                        Department:that.modifys.Department,
                        RoleName:that.modifys.RoleName,
                        Password:that.modifys.Password
                    };
                    that.$http.post('/backstage/userAdd',
                        data2,
                        {emulateJSON:true}).then(function (res) {
                    });
                    console.log(data2);
                    layer.close(index);
                    app.Lists();
                    return;
                },

                cancel: function (index) {
                    layer.close(index);
                }
            });
        },
        //修改
        modify: function (item) {
            this.modifys=item;
            var that = this;
            layer.open({
                type: 1,
                title: "编辑",
                closeBtn: 0,
                shade: 0,
                shadeClose: false,
                area: ["680px", "450px"],
                skin: 'layui-layer-rim',
                content: $("#Editor"),
                btn: ['保存', '取消'],
                zIndex: 990,
                yes: function (index) {
                    var data3 = {
                        Id:that.modifys.Id,
                        Username:that.modifys.Username,
                        Name:that.modifys.Name,
                        Mobile:that.modifys.Mobile,
                        Email:that.modifys.Email,
                        Department:that.modifys.Department,
                        RoleName:that.modifys.RoleName,
                        Password:that.modifys.Password
                    };
                    that.$http.post('/backstage/userEdit',
                        data3,{emulateJSON:true}).then(function (res) {
                    });
                    console.log(data3);
                    app.Lists();
                    layer.close(index);
                },
                cancel: function (index) {
                    layer.close(index);
                }
            });
            app.$data.modifys = {
                Username: item.Username,
                Name: item.Name,
                Mobile: item.Mobile,
                Email: item.Email,
                Department: item.Department,
                RoleName:item.RoleName
            };
        },
        view: function (item) {
            this.activeItem = item;
            layer.open({
                type: 1,
                title: "详情",
                closeBtn: 0,
                shade: 0,
                shadeClose: false,
                area: ["680px", "450px"],
                skin: 'layui-layer-rim',
                content: $("#Viewer"),
                btn: ['OK'],
                zIndex: 990,
            });
        }
    }
});
app.Lists();
