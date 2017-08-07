//demo code for radial progress
$(function () {
    //radial progress 1
    var radialObj = radialIndicator('#indicatorContainer', {
		radius:40,
		barWidth:8,
		barColor: '#87CEEB',
		barBgColor:'#eaeaea',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		displayNumber: true,
		});
		radialObj.animate(70);	
})