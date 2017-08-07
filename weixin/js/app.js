(function($) {
    'use strict';

    $(function() {
        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function() {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });
    });
})(jQuery);

$(function() {

    $(".reduceCount").click(function() {

        var x = $(".count-input").val();

        if (x > 1) {
            x--;
            $(".count-input").val(x);
            getTotal();
        }

    });

    //点击加号
    $(".addCount").click(function() {
        var x = $(".count-input").val();

        x++;
        var val = parseInt(x);

        if (val <= 20) {
            $(".count-input").val(x);
            getTotal();
        }

    });

    // 输入框失去焦点事件
    $(".count-input").blur(function() {

        if (!$(this).val()) {
            $(this).val("1");
        }
    });
    // 点击输入框
    $(".count-input").keyup(function() {

        var g = /^[1-9]*[1-9][0-9]*$/;
        var str = $(this).val();

        if (!(g.test($(this).val()))) {
            if (!str) {

            } else {
                $(this).val("1");
            }

        } else {
            var val = parseInt(str);
            if (val > 20) {
                $(this).val("20");
            } else if (val < 0) {
                $(this).val("1");
            } else {

            }
        }
        getTotal();
    });

    function getTotal() {



        // 初始化总价
        var totalPrice = 0;

        //输入框的值
        var inputValue = $(".count-input").val();

        var g = /^[1-9]*[1-9][0-9]*$/;
        //单价
        var unitPrice = $("span[name='unitPrice']").text();

        if (!(g.test(inputValue))) {

            inputValue = 1;
        };

        totalPrice += parseInt(inputValue) * parseInt(unitPrice);

        $(".totalNumberValue").text(totalPrice);
    }


    // 基金选择确认页面
    $(".confirmInvest_edit").click(function() {
        if ($(this).text() == "修改") {
            $(this).removeClass("confirmInvest_editBtn");
            $(this).addClass("confirmInvest_saveBtn");
            $(this).text("保存");
            $(this).siblings(".mainside").children().removeClass("noneEditphoneAndEmailInput");
            $(this).siblings(".mainside").children().addClass("canEditphoneAndEmailInput");
            $(this).siblings(".mainside").children().attr("readOnly", false);
        } else {
            var sMobile = $("#confirmInvest_editphoneInput").val();
            if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
                alert("输入的手机号不正确");
            } else {
                $(this).removeClass("confirmInvest_saveBtn");
                $(this).addClass("confirmInvest_editBtn");
                $(this).text("修改");
                $(this).siblings(".mainside").children().removeClass("canEditphoneAndEmailInput");
                $(this).siblings(".mainside").children().addClass("noneEditphoneAndEmailInput");
                $(this).siblings(".mainside").children().attr("readOnly", true);
            }
        }
    });

});

//项目首页tab切换功能
$(function() {
    $('#ff1').click(function() {
        $('#tab2').removeClass("am-active");
        $("#tab1").addClass("am-active");
        $('#ff2').parent("div").removeClass("middle-tab_active");
        $('#ff1').parent("div").addClass("middle-tab_active");
        $('#ff1').children("i").toggleClass("am-icon-angle-up am-icon-angle-down");
        $('#ff2').children("i").removeClass("am-icon-angle-down").addClass("am-icon-angle-up");
        var x = $("#ff1").children("i").attr("class");
        if (x == 'am-icon-angle-down') {
            $("#tab1").css("display", "block");
            $("#tab2").css("display", "none");
        } else {
            $("#tab1").css("display", "none");
            $("#tab2").css("display", "none");
        }
    });
    $('#ff2').click(function() {
        $('#tab1').removeClass("am-active");
        $("#tab2").addClass("am-active");
        $('#ff1').parent("div").removeClass("middle-tab_active");
        $('#ff2').parent("div").addClass("middle-tab_active");
        $('#ff2').children("i").toggleClass("am-icon-angle-up am-icon-angle-down");
        $('#ff1').children("i").removeClass("am-icon-angle-down").addClass("am-icon-angle-up");
        var y = $("#ff2").children("i").attr("class");
        if (y == 'am-icon-angle-down') {
            $("#tab2").css("display", "block");
            $("#tab1").css("display", "none");
        } else {
            $("#tab1").css("display", "none");
            $("#tab2").css("display", "none");
        }
    });
});

//弹出框
$(function() {
  $('#doc-confirm-toggle').
    on('click', function() {
      $('#my-confirm').modal({
        relatedTarget: this,
        onConfirm: function(options) {
          // alert('msg');
        },
        // closeOnConfirm: false,
        onCancel: function() {
          // alert('算求，不弄了');
        }
      });
    });
});



/*项目列表下拉*/
$(document).ready(function(){
  $(".top-fix li").click(function(){
    var x=$(this).children().attr("class");
    if(x=="triangle-up"){
         $(".top-fix li span").addClass("triangle-up").removeClass("triangle-down");
         $(this).children().addClass("triangle-down").removeClass("triangle-up");
    }
    else{
        $(this).children().addClass("triangle-up").removeClass("triangle-down");
    }
    var y=$(".top-fix li:first-child").children().attr("class");
    var z=$(".top-fix li:last-child").children().attr("class");
    if(y=="triangle-up"){
        $(".lingyu").css("display","none")
    }
    else{
        $(".lingyu").css("display","block")
    }
     if(z=="triangle-up"){
        $(".zhuangtai").css("display","none")
    }
    else{
        $(".zhuangtai").css("display","block")
    }
  });
});