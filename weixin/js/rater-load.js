// JavaScript Document
var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
//顶部下啦加载
function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');
		/*$.ajax({
			type: "GET",
			url: "LoadMore.ashx",
			data: { page: generatedCount },
			dataType: "json",
			success: function (data) {
				var json = data;
				$(json).each(function () {
				li = document.createElement('li');
				li.innerHTML = '<img src="' + this.src + '"/>';
				el.insertBefore(li, el.childNodes[0]);
				});
			}
		});*/
		li = document.createElement('li');
		li.setAttribute("class", "rater-box"); 
		li.innerHTML = 
		'<a class="am-cf" href="#">'+
			'<div class="am-u-sm-4 rater-img">'+
				'<img src="http://g.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd52669eea8515a918972bd50736e9.jpg" class="am-img-responsive " alt=""/>'+
		   '</div>'+
		  ' <div class="rater-inner am-u-sm-8">'+
				'<div>'+
					'<span>下拉加载资本</span>'+
				   ' <span class="rater-icons"><i class=" iconfont">&#xe621;</i></span>'+
					'<span class="rater-icons rater-icons-bule"> <i class=" iconfont">&#xe620;</i></span>'+
				'</div>'+
				'<div class="rater-scale">投资规模：1000万－5000万</div>'+
				'<div class="rater-care">'+
					'<span class="am-badge am-badge-secondary am-radius">关注</span>医疗健康／电子商务／游戏娱乐'+
				'</div>'+
		   '</div>'+
		   '<div class="rater-synopsis am-u-sm-12"><strong>简介：</strong>由北京大学联合数家大型企业共同发起设立的综合类资产管理集团，致力于为企业、地方政府和高净值客户提供“资本科技、人才”相结合的综合资产管理服务</div>'+
		'</a>';		
		el.insertBefore(li, el.childNodes[0]);
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}
//底部上拉刷新
function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');
		//==========================================
		/*$.ajax({
			type: "GET",
			url: "LoadMore.ashx",
			data: { page: generatedCount },
			dataType: "json",
			success: function (data) {
				var json = data;
				$(json).each(function () {
				li = document.createElement('li');
				li.innerHTML = '<img src="' + this.src + '"/>';
				el.appendChild(li, el.childNodes[0]);
				});
			}
		});*/
		li = document.createElement('li');
		li.setAttribute("class", "rater-box"); 
		li.innerHTML = 
		'<a class="am-cf" href="#">'+
			'<div class="am-u-sm-4 rater-img">'+
				'<img src="http://a.hiphotos.baidu.com/image/pic/item/962bd40735fae6cddb8adf610db30f2442a70ff7.jpg" class="am-img-responsive " alt=""/>'+
		   '</div>'+
		  ' <div class="rater-inner am-u-sm-8">'+
				'<div>'+
					'<span>上啦加载资本</span>'+
				   ' <span class="rater-icons"><i class=" iconfont">&#xe621;</i></span>'+
					'<span class="rater-icons rater-icons-bule"> <i class=" iconfont">&#xe620;</i></span>'+
				'</div>'+
				'<div class="rater-scale">投资规模：1000万－5000万</div>'+
				'<div class="rater-care">'+
					'<span class="am-badge am-badge-secondary am-radius">关注</span>医疗健康／电子商务／游戏娱乐'+
				'</div>'+
		   '</div>'+
		   '<div class="rater-synopsis am-u-sm-12"><strong>简介：</strong>由北京大学联合数家大型企业共同发起设立的综合类资产管理集团，致力于为企业、地方政府和高净值客户提供“资本科技、人才”相结合的综合资产管理服务</div>'+
		'</a>';
		el.appendChild(li, el.childNodes[0]);
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');  
    pullUpOffset = pullUpEl.offsetHeight;
      
    myScroll = new iScroll('wrapper-trends', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新';
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 10) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开刷新';
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 10) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';              
                pullDownAction();   // Execute custom function (ajax call?)
            } else if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';              
                pullUpAction(); // Execute custom function (ajax call?)
            }
        }
    });
      
    setTimeout(function () { document.getElementById('wrapper-trends').style.left = '0'; }, 800);
}
document.addEventListener('touchmove', function (e) {  e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
