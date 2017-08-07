//simpleIf(var,c1,v1,c2,v2,...,cn,vn)
//var == c1 返回 v1
//var == c2 返回 v2
//.......
//var == cn 返回 vn
//否则返回空字符串
template.helper('simpleIf', function () {
    var length = arguments.length;
    if (length < 2 || length % 2 == 0) {
        return '';
    }
    for (var i = 1; i < length; i += 2) {
        if (arguments[0] == arguments[i]) {
            return arguments[i + 1];
        }
    }
    return '';
});

template.helper('valueIfDefault', function (value, defaultValue) {
    if (value) {
        return value;
    }
    return defaultValue;
});

template.helper('dateFormat', function (time, fmt) {
    if (!time) {
        return '';
    }
    var date = new Date(time);
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
});