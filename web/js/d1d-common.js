
var resize;
var baseBankPath = "/mainstyle/images/bank/";
var getCity,initProvince,province='北京',city='北京';//绑定银行卡页面使用
var getBankImagePath;//获得银行图片路径
window.console=window.console||{};
function fanhui(){
	var d=$("#tishi").html();
	if(d=="修改成功"||d=="设置成功"||d=="设置支付密码成功"){
		window.location.href="/usercenter/usercenterIndex?"+new Date().getTime()+"#!/safeCenter?path=/usercenter/usersafe/goSafe?"+new Date().getTime();
		//avalon.router.redirect("/usercenter/usercenterIndex#!/safeCenter?path=/usercenter/usersafe/goSafe"+new Date());
	}else if(d=="修改登录密码成功,请重新登录"){
		window.location.href="/loginOut/updatepwdloginOut";
		//  /security/login
	}else{
		$("#block").css("display","none");
	}
}
$(function(){ 
	//淘券列表--第二个BOX无margin
	var y1 = Number($(".voucher-list li").length);
	for(var x1 = 1;x1<=y1;x1++){
		if(x1 % 2 == 0){
			$(".voucher-list li:eq("+(x1-1)+")").addClass("mar-r-0");
		};		
	};
	
	//商家大全--第四个BOX无margin
	var y2 = Number($(".merchant-list li").length); 
	for(var x2 = 1;x2<=y2;x2++){
		if(x2 % 4 == 0){
			$(".merchant-list li:eq("+(x2-1)+")").addClass("mar-r-0");
		}; 
	};
	//用户中心点击展开收缩
	$(".flip").click(function(){
		$(".panel").slideToggle("show");						
	})	
    //弹窗
	var x;
	var y;
	resize=	function xy(){
		 x=($(window).width()-$(".modal-dialog").width())/2;
	     y=($(window).height()-$(".modal-dialog").height())/2;
		 $("#blockUI").height($(window).height());
	$(".modal-dialog").animate({"left":x,"top":y},0);
	}
	resize();
/*	$(window).resize(function(){
		resize();
	});*/
	
	//切换	
	$(".tab-nav li").click(function(){
		var n = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-con blockquote:eq("+n+")").css({"display":"block"}).siblings().css({"display":"none"});
	});
	/*切换用户登录注册-弹框*/
	$(".login-nav dd").click(function(){
		var n = $(this).index();
		$(this).addClass("popup-log-current").siblings().removeClass("popup-log-current");
		$(".log-con blockquote:eq("+n+")").css({"display":"block"}).siblings().css({"display":"none"});
	});
	//用户中心--现金充值--展开收缩
//	$(".internet-bank-up").click(function(){
//		$(".internet-banking-hidden").slideToggle();	
//		$(".internet-bank-down").fadeIn();
//		$(".internet-bank-up").fadeOut();
//	})
//	$(".internet-bank-down").click(function(){
//		$(".internet-banking-hidden").slideUp();	
//		$(".internet-bank-down").fadeOut();
//		$(".internet-bank-up").fadeIn();
//	})
	
	
	$(".funds").click(function(){
		$(".funds-hidden").slideToggle();
	})
	
//	//订单页/淘券详情"+""-"
//	$(".raise-operate a").click(function(){
//		var x = $(this).text();
//		var num = Number($(".invest-amount").text());
//		if(x=="+"){
//			num++;
//			$(".invest-amount").text(num);
//		}
//		if(x=="-" && num>1){
//			num--;
//			$(".invest-amount").text(num);
//		}
//		num = x == ("+") ? num++ : num--;
//		$(".invest-amount").text(num);
//	})
	$(".ico-plus").click(function(){
		var num = Number($(".invest-amount").text());
		num++;
		$(".invest-amount").text(num);
	});
	$(".ico-minus").click(function(){
		var num = Number($(".invest-amount").text());
		if(num>1){
			var num = Number($(".invest-amount").text());
			num--;
			$(".invest-amount").text(num);
		};	
	})
	
	
		
		
})
function showloading() {
	if($("#lodingui").length<=0){
	var loadinghtml = '<div id="lodingui"> <div id="loding-blockUI"></div> <div class="modal-dialog">  <img src="/mainstyle/images/loading1.gif" width="50px" height="50px"/></div>	</div>';
	$("body").append(loadinghtml);
	resize();
}
}

function closeloading() {
//	console.log("关闭了");
	$("#lodingui").remove();
	
}
//404/500
$(".error-dialog").height($(window).height());
$(".error-dialog").width($(window).width());