var $logindiv;

var $usrdata = null;

var logindivsubmit;

function OnComplete(event, xhr, settings) {

}
$(document).ajaxStart(OnComplete);

function checkLoginState() {

    if ($usrdata != null) {
        return true;
    }
    return false;
    //打开登录div
    openLoginprotal();
}
/**
 * 打开登录div方法
 */
function openLoginprotal() {
    $.ajax({
        url: "/mainstyle/html/login/loginDiv.html",
        type: "get",
        dataType: "html",
        success: function (data) {
            $logindiv = data;
            $('body').append(data);
            resize();
            validLogin();
        }
    });
}


/*function openRegprotal() {
 $.ajax({
 url : "/mainstyle/html/reg/regDiv.html",
 type : "get",
 dataType : "html",
 success : function(data) {
 $logindiv = data;
 $('body').append(data);
 resize();

 }

 });
 }
 */
/**
 * 关闭div
 */
function closeLoginprotal() {
    $('#loginDiv').remove();

}


/**
 * 提交动态表单
 */
function ajaxlogin() {
    var aa = $("form#logindivforms");
    $.post("/security/login?loginType=1", $("form#logindivforms").serialize(),
        function (data) {
            if (data.state == 0) {
                try {
                    ajaxLoginCallback(data);
                } catch (e) {

                }
                closeLoginprotal();
            } else {
                alert("用户名或密码错误");
            }
        });
}

function isloginfilter(data) {
    try {
        if (data != null && data.state != null && data.state == 1) {
            openLoginprotal();

        }

    } catch (e) {
        return true;
    }

    return true;

}

function validLogin() { //提交的方法
    logindivsubmit = $.validate("logindivforms", [{ //用户名
        name: "account",
        rules: {
            errorMsg: "请输入4~20位字符（区分大小写）",
            defaultMsg: "请输入4~20位字符（区分大小写）",
            sucessMsg: "",
            requireMsg: "请输入用户名。",
            regx: "^[\u4e00-\u9fa5_0-9a-zA-Z_]{4,20}$",
        }
    }, { //密码
        name: "password",
        rules: {
            errorMsg: "请输入6~16位字符（区分大小写）",
            defaultMsg: "请输入6~16位字符（区分大小写）",
            sucessMsg: "",
            requireMsg: "请输入密码",
            regx: "^[_0-9a-zA-Z]{6,16}$"
        }
    }], logindivSub);

}


function logindivSub() { //提交的方法
    ajaxlogin();
}