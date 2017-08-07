var resizeDialog;

$(function () {
    //用户中心头部菜单
    $(".t-ucenter>img").click(function () {
        if ($(".t-ucenter>ul").is(":visible") == false) {
            $(".t-ucenter>ul").animate({height: "85px"}, 200).slideDown();
        } else {
            $(".t-ucenter>ul").slideUp().animate({height: "0"}, 200);
        }
    });

    $(".flip").click(function () {
        $(".panel").slideToggle("show");
    });
    $(".flip-1").click(function () {
        $(".panel-1").slideToggle("show");
    });
    $(".flip-2").click(function () {
        $(".panel-2").slideToggle("show");
    });
    $(".flip-3").click(function () {
        //.$(".panel-3").slideToggle("show");
        //$(this).parents("li").find(".panel-3").hide();

        $(this).parents("li").find(".panel-3").slideToggle("show")
            .end().siblings().find(".panel-3").hide();
    });
    $(".in-up").click(function () {
        $(this).fadeOut().siblings(".in-down").fadeIn()
            .siblings(".investors-con").slideDown()
            .siblings(".investors-con-intro").fadeOut()
            .parents("li").siblings().find(".investors-con").fadeOut()
            .siblings(".investors-con-intro").fadeIn()
            .siblings(".in-down").fadeOut()
            .siblings(".in-up").fadeIn();
    });
    $(".in-down").click(function () {
        $(this).fadeOut().siblings(".in-up").fadeIn()
            .siblings(".investors-con").slideUp()
            .siblings(".investors-con-intro").fadeIn()
            .parents("li").siblings().find(".investors-con-intro").fadeIn();
    });
    //展开或关闭下拉菜单
    $(".open_select_box").click(function (event) {
        var x_index = Number($(".open_select_box").index(this));
        event.stopPropagation();
        $(this).parents().find(".select_list:eq(" + x_index + ")").toggle();
    });
    //离开选择区域后，展开的下拉列表关闭
    $(document).click(function (event) {
        var eo = $(event.target);
        if ($(".open_select_box").is(":visible") && eo.attr("class") != "select_list" && !eo.parent(".select_list").length)
            $('.select_list').hide();
    });
    /*获取选中的值*/
    var $dss = $(".select_list li");
    $dss.click(function () {
        var $txt = $(this).text();//展开菜单中的列表文本值
        /*var $hidden_txt=$(".hidden_txt");*/
        var $t1 = $(".open_select:eq(" + x + ")");//模拟文本框，接受选择的值
        $t1.text($txt);
        /*$hidden_txt.val($txt);*/
        $(this).parents(".select_list").hide();
    });
    //弹窗
    var x;
    var y;
    resizeDialog = function xy() {
        x = ($(window).width() - $(".modal-dialog").width()) / 2;
        y = ($(window).height() - $(".modal-dialog").height()) / 2;
        $("#blockUI").height($(window).height());
        $(".modal-dialog").animate({"left": x, "top": y}, 0);
    };
    //xy();
    $(window).resize(function () {
        resizeDialog();
    });
    //切换系统消息-留言消息
    $(".tab-nav h2").click(function () {
        var n = $(this).index();
        $(this).addClass("h2-current").siblings().removeClass("h2-current");
        $(".tab-con blockquote:eq(" + n + ")").css({"display": "block"}).siblings().css({"display": "none"});
    });
    $(".tab-nav li").click(function () {
        var n = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-con blockquote:eq(" + n + ")").css({"display": "block"}).siblings().css({"display": "none"});
    });
    $('.top-nav li a').click(function () {
        $(this).parent().attr('class', 'current');
        $(this).parent().siblings().removeAttr('class');
    });
    //娴忚椤圭洰--绗笁涓狟OX鏃爉argin     
    $(".triple .project-box").each(function (i) {
        if ((i + 1) % 3 == 0) {
            $(this).css({marginRight: 0})
        }
    });
    $(".triples>li").each(function (i) {
        if ((i + 1) % 3 == 0) {
            $(this).css({marginRight: 0})
        }
    });
    //placeholder兼容
    $('input,textarea').placeholder();
});
