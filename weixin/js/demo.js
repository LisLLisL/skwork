//demo code for radial progress
$(function () {
    //radial progress 0
    var radialObj = radialIndicator('#indicatorContainer', {
		radius:15,
		barWidth:4,
		barColor: '#3bb9ec',
		barBgColor:'#333333',
		percentage:true,
		initValue: 0,
		roundCorner: true,
		displayNumber: false,
		});
		radialObj.animate(70);

    
	
})