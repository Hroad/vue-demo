var Util = {};
$(document).ajaxStart(function () {
    layer.load(0);
});
$(document).ajaxComplete(function () {
    layer.closeAll('loading');
});
Util.HttpGet = function (url, callback) {
    $.ajax({
        url: url,
        type: 'GET',
        timeout: 5000,
        success: callback,
        error: function (xhr, textStatus) {

            Util.ShowMessage('error', "Error:" + xhr + "\r\nText:" + textStatus);
        }
    });
};
Util.HttpPost = function(url,data,callback) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        timeout: 5000,
        dataType: 'json',
        success: callback,
        error: function (xhr, textStatus) {
            console.log(xhr);
            if (xhr.status == 401) {
                Util.ShowMessage('error', "请重新登录");
                return;
            } else if (xhr.status == 500) {
                Util.ShowMessage('error', "出现服务器内部错误：" + responseText);
                return;
            }
            Util.ShowMessage('error', "Error:" + xhr + "\r\nText:" + textStatus);
        }
    });
};
//在元素数组中搜索匹配Id的项
Util.FindById = function(arr, id) {
    if (arr.length <= 0) return null;
    if (id < 1) return null;
    return Util.FindItemByValue(arr, "Id", id);
}
Util.FindItemByValue = function (arr, propertyName, propertyValue) {
    if (arr.length <= 0) return null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][propertyName] == propertyValue) return arr[i];
    }
}
//在数组中查找一个项，返回其索引
Util.FindInArray = function(arr,text){
    if(arr.length<=0) return -1;
    if(text=="")return -1;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]=="")continue;
        if(arr[i]==text) return i;
    }
    return -1;
}
//显示提示信息
Util.ShowMessage = function(type,str){
    if(type=="error"){
        top.toastr.error(str, '提示');
    }else{
        top.toastr.success(str, '提示');
    }

};

//去除字符串尾部空格或指定字符
String.prototype.TrimEnd = function(c)
{
    if(c==null||c=="")
    {
        var str= this;
        var rg = /\/s/;
        var i = str.length;
        while (rg.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }
    else
    {
        var str= this;
        var rg = new RegExp(c);
        var i = str.length;
        while (rg.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }
};