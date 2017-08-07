// JavaScript Document

var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
//顶部下啦加载
/*function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		
		el = document.getElementById('show');
		/*el = document.getElementById('thelist');*/
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
		
		/*li = document.createElement('li');
		li.setAttribute("class", "proj-box1 proj-box "); 
		li.innerHTML = 
                '<a href="#">'+
                    '<img src="http://img.shoukechou.com/ssheUploadFile/userPhoto/2015/08/19/126f8466cd7540749e02af76e77c22a8.jpg" class="am-img-responsive" alt=""/>'+
                    '<div class="proj-adress"><i class="iconfont">&#xe605;</i>bbbb</div>'+
                    '<div class="proj-tit">'+
                    '</div>'+
                    '<div class="proj-tit-inner">'+
                       ' 上啦加载 &nbsp; 啊啊啊'+
                        '<div>'+
                            '<span class="fir-span">已筹集：¥12345</span>'+
                            '<span class="other-span"><i class="am-icon-star"></i>1212</span>'+
                            '<span class="other-span"><i class="am-icon-thumbs-up"></i>2323</span>'+
                        '</div>'+
                   ' </div>'+
               ' </a>';
		el.insertBefore(li, el.childNodes[0]);
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}*/
//底部上拉刷新
function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('show');
		/*el = document.getElementById('thelist');*/
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
		li.setAttribute("class", "proj-box1 proj-box"); 
		li.innerHTML = 
                '<div class="cykj-box">'+
                    '<div class="cykj-img">'+
                        '<img src="http://s.amazeui.org/media/i/demos/bing-4.jpg">'+
                        
                    '</div>'+
                    '<div class="cykj-content">'+
                        '<div class="cykj-title">首科空间·融创动力社区</div>'+
                        '<div class="cykj-address"><img src="../mainstyle/images/cykj-address.png">鄞州区融创动力科技文化创意产业园B座A108</div>'+
                        '<div class="cykj-phone"><img src="../mainstyle/images/cykj-phone.png">4008073636</div>'+
                        '<div class="cykj-money">1500元/月/工位</div>'+
                    '</div>'+
                '</div>';
               //  '<a href="#">'+
               //      '<img src="http://g.hiphotos.baidu.com/image/pic/item/730e0cf3d7ca7bcb4cc50826bc096b63f624a879.jpg" class="am-img-responsive" alt=""/>'+
               //      '<div class="proj-adress"><i class="iconfont">&#xe605;</i>bbbb</div>'+
               //      '<div class="proj-tit">'+
               //      '</div>'+
               //      '<div class="proj-tit-inner">'+
               //         ' 下啦加载 &nbsp; 啊啊啊'+
               //          '<div>'+
               //              '<span class="fir-span">已筹集：¥12345</span>'+
               //              '<span class="other-span"><i class="am-icon-star"></i>1212</span>'+
               //              '<span class="other-span"><i class="am-icon-thumbs-up"></i>2323</span>'+
               //          '</div>'+
               //     ' </div>'+
               // ' </a>';
		el.appendChild(li, el.childNodes[0]);
		
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
   /* pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;*/
    pullUpEl = document.getElementById('pullUp');  
    pullUpOffset = pullUpEl.offsetHeight;
      
    myScroll = new iScroll('wrapper', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function () {
           /* if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
            } else */if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
            }
        },
        onScrollMove: function () {
           /* if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新';
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
                this.minScrollY = -pullDownOffset;
            } else*/ if (this.y < (this.maxScrollY - 10) && !pullUpEl.className.match('flip')) {
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
            /*if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';              	
                pullDownAction();   // Execute custom function (ajax call?)
            } else */if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';  
				           
                pullUpAction(); // Execute custom function (ajax call?)
            }
        }
    });
      
    setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}
document.addEventListener('touchmove', function (e) {  e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);