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
		li.setAttribute("class", "trends-box"); 
		li.innerHTML = 
                '<div class="trends-date">2015-09-09</div>'+
                '<div href="#" class="trends-link">'+
                   ' <h1>下拉加载</h1>'+
                    '<img src="http://g.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd52669eea8515a918972bd50736e9.jpg" class="am-img-responsive" alt=""/>'+
                    '<p>自09月01日”中国未来”2015高新科技创业大赛启动以来,收到了来自祖国各个赛场及数百项目报名申请。数十位评审导师依据报名项目的市场前景、科技创新能力、成长空间、创始团队以及商业模式几大维度进行了..</p>'+
                   ' <a class="clearfix my-link" href="#">阅读全文'+
                        '<span class="am-icon-chevron-right"></span>'+
                    '</a>'+
                '</div>';
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
		li.setAttribute("class", "trends-box"); 
		li.innerHTML = 
                '<div class="trends-date">2015-09-09</div>'+
                '<div href="#" class="trends-link">'+
                   ' <h1>上拉加载</h1>'+
                    '<img src="http://a.hiphotos.baidu.com/image/pic/item/962bd40735fae6cddb8adf610db30f2442a70ff7.jpg" class="am-img-responsive" alt=""/>'+
                    '<p>自09月01日”中国未来”2015高新科技创业大赛启动以来,收到了来自祖国各个赛场及数百项目报名申请。数十位评审导师依据报名项目的市场前景、科技创新能力、成长空间、创始团队以及商业模式几大维度进行了..</p>'+
                   ' <a class="clearfix my-link" href="#">阅读全文'+
                        '<span class="am-icon-chevron-right"></span>'+
                    '</a>'+
                '</div>';
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
