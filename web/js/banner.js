jQuery(function(){
    var imgList = $(".bannerImg .imgList").children("li");
    var imgIconList = $(".bannerImg .imgBtnList").children("a");
    var len = imgList.length;
    var iNow = 0;
    var iSpeed = 6000;
    var iOld = len - 1;
    // init
    var timer = setInterval(bannerImg, iSpeed);

    imgIconList.each(function(index){
       $(this).click(function(){
           iNow = index -1;
           bannerImg();
       });
    }); 

    $(".bannerImg").hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(bannerImg, iSpeed);
    });

    function bannerImg(){
        iOld = iNow;
        imgList.css({"opacity" : "0", "z-index" : "2"});
        imgList.eq(iOld).css({"opacity" : "0.5", "z-index": "3"});
        iNow++;
        if(iNow == imgList.length ){
            iNow = 0;
        }
        imgList.eq(iNow).css({"z-index" : "4"}).animate({ "opacity" : "1"},800);
        imgIconList.eq(iNow).addClass("now_a").siblings("a").removeClass("now_a");
    }

});

