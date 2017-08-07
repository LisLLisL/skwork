//demo code for radial progress
$(function () {
    //radial progress 1
    var radialObj = radialIndicator('#indicatorContainer', {
		radius:23,
		barWidth:4,
		barColor: '#87CEEB',
		barBgColor:'#eaeaea',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		displayNumber: true,
		});
		radialObj.animate(70);	
})

$(function () {
    //radial progress 2
    var radialObj = radialIndicator('#indicatorContainer2', {
		radius:23,
		barWidth:4,
		barColor: '#87CEEB',
		barBgColor:'#eaeaea',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		displayNumber: true,
		});
		radialObj.animate(50);	
})

$(function () {
    //radial progress 1
    var radialObj = radialIndicator('#indicatorContainer3', {
		radius:23,
		barWidth:4,
		barColor: '#87CEEB',
		barBgColor:'#eaeaea',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		displayNumber: true,
		});
		radialObj.animate(30);	
})