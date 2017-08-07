function dialog(url, id, width, height) {
    $.get(url, function (rdata) {
        var d = document.createElement("div");
        $(d).html(rdata);
        d.id = id;
        //d.style="position:fixed;left:"+($(window).width()-width)/2+"px;top:"+($(window).height()-height)/2+"px";
        document.body.appendChild(d);
        resize();
    });
}
function close(id, callback) {
    $("#" + id).remove();
    if (callback)
        callback();
}

function moddialog(id, context) {

    var modediv = document.createElement("div");
    var modecontent = '<div id="blockUI"></div>';
    modecontent = modecontent + context;
    modediv.id = id;
    document.body.appendChild(modediv);
    modediv.innerHTML = modecontent;
    resizeDialog();
}

function moddialogWechat(id, context) {
    var modediv = document.createElement("div");
    var modecontent = '<div id="blockUI"></div>';
    modecontent = modecontent + context;
    modediv.id = id;
    document.body.appendChild(modediv);
    modediv.innerHTML = modecontent;
    resizeDialog();

}


function moddialogwithform(id, width, height, context, formid, formname) {
    var modediv = document.createElement("div");
    var modecontent = '<div id="blockUI"></div><div class="modal-dialog">';
    modecontent = modecontent + context + '</div></div>';
    modediv.id = id;
    $(modediv).html(modecontent);
    document.body.appendChild(modediv);
    resizeDialog();


}

function showdialog(content, opts, data) {
    var div = document.createElement("div");
    div.id = new Date().getTime();
    opts = opts || {};
    if (!opts.type)
        opts.type = "alert";
    var d = '<div id="blockUI"></div>'
        + '<div class="modal-dialog">'
        + '<a href="javascript:;" name="close" class="close"></a>'
        + '<div class="balance-deposit f_center bg-white f-yahei">'
        + '<p class="f_24 red">' + content + '</p> ';
    switch (opts.type) {
        case 'alert':
            d = d + getalert(opts.onsure);
            break;
        case 'confirm':
            d = d + getconfirm(opts.onsure, opts.oncancel);
        default:
            break;
    }
//			d = d+'<a href="javascript:close(\''+div.id+'\''+((callback=='undefined')?','+callback:'')+');" class="f_14 btn white mar-t-40">确&nbsp;定</a>'
    d = d + '</div>';
    $(div).html(d);
    document.body.appendChild(div);
    resize();
    function getconfirm() {
        return '<p class="mar-t-40"><a href="javascript:;" name="sure" class="f_14 btn white">确&nbsp;定</a> <a href="javascript:;" name="cancel" class="f_14 btn btn-gray">取&nbsp;消</a></p>';
    }

    function getalert() {
        return '<a href="javascript:;" name="sure" class="f_14 btn white mar-t-40">确&nbsp;定</a>';
    }

    $("#" + div.id + " a[name=close]").bind("click", function () {
        if (opts.onclose)
            close(div.id, opts.onclose);
        close(div.id);
    });
    $("#" + div.id + " a[name=sure]").bind("click", function () {
        if (opts.onsure)
            close(div.id, opts.onsure);
        close(div.id);
    });
    $("#" + div.id + " a[name=cancel]").bind("click", function () {
        if (opts.oncancel)
            close(div.id, opts.oncancel);
        close(div.id);
    });
}
function closemoddialog(id) {

    $("#" + id).remove();
}
function tanchuang(msg) {
    $("#tishi").html(msg);
    $("#block").css("display", "block");
    $("#block").css("style", "position:fixed;left:400px;top:200px");

    //document.getElementById("block").style="position:fixed;left:400px;top:200px";
    resize();
}

