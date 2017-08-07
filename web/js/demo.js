//demo code for radial progress
$(function () {
    //radial progress 1
    var radialObj = radialIndicator('#indicatorContainer', {
		radius:25,
		barWidth:4,
		barColor: '#87CEEB',
		barBgColor:'#eaeaea',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		displayNumber: false,
		});
		radialObj.animate(70);

    //radial progress 2
    var radialObj2 = radialIndicator('#indicatorContainer2', {
		radius:25,
		barWidth:4,
		barColor: '#87CEEB',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		});
		radialObj2.animate(50);


    //radial progress 3
})