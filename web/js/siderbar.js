// JavaScript Document

/*medal_hover_变换*/
$(document).ready(function(){
	$(".medal_b").mouseover(function(){
		$(".medal_b img").attr('src', '../mainstyle/images/medal_b_g.png');
	});
	$(".medal_b").mouseleave(function(){
		$(".medal_b img").attr('src', '../mainstyle/images/medal_b.png');
	});
	
});

/* 项目方_投资方_切换*/
$(document).ready(function(){
	$(".line_1").mouseover(function(){
		var n=$(".line_1").index($(this));
		$(".line_2").hide();
		$(".line_2").eq(n).show();
		$(".line_1").removeClass("line_1_active");
		$(".line_1").eq(n).addClass("line_1_active");
		$(".line_2 ul li").removeClass("li_blue");
		$(".moren").addClass("li_blue");
	});
	
	$(".line_2 ul li").click(function(){
		$(".line_2 ul li").removeClass("li_blue");
		$(this).addClass("li_blue");
		})
});

/*增加投票结束标签*/
/*$(document).ready(function(){
		$(".tpjs").append("<img src='../mainstyle/images/tpjs.png' style=' position:absolute; left:640px; z-index:10; width:65px;height:64px; margin:0'>");
		
});
*/
/*发起投票*/
function layeropen(){
	layer.open({
    type: 1,
    title: false,
    closeBtn: 2,
	area: ['761px', '571px'],
    shadeClose: true,
    skin: 'yourclass',
    content: $('#voteAddNew').html(),
});
	}

/*参与投票*/
function layeropen1(){
	layer.open({
    type: 1,
    title: false,
    closeBtn: 2,
	area: ['761px', '740px'],
    shadeClose: true,
    skin: 'yourclass',
    content: $('#voteAddJoin').html()
});

$(".bt ul li").click(function(){
		var n=$(".bt ul li").index($(this));
		$(".bt ul li img").attr('src', '../mainstyle/images/btn_gray.png');
		$(".bt ul li img").eq(n).attr('src', '../mainstyle/images/btn_green.png');
	});
	
	}
	
/*发起项目笔记*/
function layeropen2(){
	layer.open({
    type: 1,
    title: false,
    closeBtn: 2,
	area: ['800px', '570px'],
    shadeClose: true,
    skin: 'yourclass',
    content: $('#noteAddNew').html()
});

$(".note_content_right ul li").click(function(){
		var n=$(".note_content_right ul li").index($(this));
		$(".note_content_right ul li img").attr('src', '../mainstyle/images/btn_gray.png').parent().val(0);
		$(".note_content_right ul li span").css("display","none");
		$(".note_content_right ul li span").eq(n).css("display","block");
		$(".note_content_right ul li img").eq(n).attr('src', '../mainstyle/images/btn_green.png').parent().val(1);
	});
	}	


/*发起对话*/
function layeropen3(){
	layer.open({
    type: 1,
    title: false,
    closeBtn: 2,
	area: ['800px', '350px'],
    shadeClose: true,
    skin: 'yourclass',
    content: $('#cheat').html()
});

$(".note_content_right ul li").click(function(){
		var n=$(".note_content_right ul li").index($(this));
		$(".note_content_right ul li img").attr('src', '../mainstyle/images/btn_gray.png');
		$(".note_content_right ul li span").css("display","none");
		$(".note_content_right ul li span").eq(n).css("display","block");
		$(".note_content_right ul li img").eq(n).attr('src', '../mainstyle/images/btn_green.png');
	});
	}	
	
/*新建动态*/
function layeropen4(){
	layer.open({
    type: 1,
    title: false,
    closeBtn: 2,
	area: ['761px', '567px'],
    shadeClose: true,
    skin: 'yourclass',
    content: $('#AddNew_dynamic').html(),
});
	}	
	
/*评论显示隐藏*/
$(document).ready(function(){
$(".answerer_wrapper .answerer_box .answerer_huifu").click(function(){
		var n=$(".answerer_wrapper .answerer_box .answerer_huifu").index($(this));
		$(" .answerer_input").css("display","none");
		$(".article_box .comment_line").css("display","block");
		$(".answerer_wrapper .answerer_box .answerer_input").eq(n).css("display","block");
		$(".answerer_wrapper .answerer_box .answerer_input input").eq(n).focus();
	});
	
$(".article_box .comment_line img").click(function(){
		var n=$(".article_box .comment_line img").index($(this));
		$(".article_box .comment_line").css("display","block");
		$(".article_box .comment_line").eq(n).css("display","none");
		$(".answerer_input").css("display","none");
		$(".article_box .answerer_input").eq(n).css("display","block");
		$(".article_box .answerer_input input").eq(n).focus();
	});	

});
