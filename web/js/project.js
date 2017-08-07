var _loginPopupHtml;

var logindivsubmit;

var _projectId;

var _type='';

function OnComplete(event, xhr, settings) {

}
$(document).ajaxStart(OnComplete);

//Open project detail page
function openProjectDetailPage(proId) {
    if(!proId){
        return false;
    }
    _projectId = proId;
    $.ajax({
        url: "/usercenter/usersafe/openProjectDetailPage",
        type: "post",
        data: {"proId": proId},
        success: function (result) {
            if (result.state == "1") { //1：表示没有登陆
                openLoginPopup();
            } else {
                location.href = '/project/queryProjectDetail?zcProject.proId=' + proId;
            }
        }
    });
}

//Open project detail page
function openProjectDetailPageByActivity(proId) {
    if (!proId) {
        return false;
    }
    _projectId = proId;
    _type="ByActivity";
    $.ajax({
        url: "/usercenter/usersafe/openProjectDetailPage",
        type: "post",
        data: {"proId": proId},
        success: function (result) {
            if (result.state == "1") { //1：表示没有登陆
                openLoginPopup();
            } else {
                location.href = '/project/queryProjectDetailByActivity?zcProject.proId=' + proId;
            }
        }
    });
}
/**
 * 打开登录div方法
 */
function openLoginPopup() {
    $.ajax({
        url: "/mainstyle/html/login/loginDiv2.html",
        type: "get",
        dataType: "html",
        success: function (data) {
            _loginPopupHtml = data;
            $('body').append(data);
            resize();
            validAndLogin();
        }
    });
}

function validAndLogin() { //提交的方法
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
    }], invokeLogin);
}

function invokeLogin() { //提交的方法
    $.post("/security/login?loginType=1", $("form#logindivforms").serialize(),
        function (data) {
            if (data.state == 0) {
                closeLoginPopup();
                location.href= '/project/queryProjectDetail'+_type+'?zcProject.proId=' + _projectId;
            } else {
                alert("用户名或密码错误");
            }
        }
    );
}

function closeLoginPopup() {
    $('#loginDiv').remove();
}