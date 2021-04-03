$(document).ready(function(){
	$('.slider').slick({
		centerMode:false,
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:false,
		speed:500,
		initialSlide:0,
		draggable:false,
	});
});


$(document).ready(function(){
	$('.pre-release-slider').slick({
		centerMode:true,
		arrows:true,
		dots:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:false,
		speed:500,
		initialSlide:1,
		draggable:false,
		variableWidth:true
	});
});

$(document).ready(function(){
	$('.categories-slider').slick({
		centerMode:false,
		arrows:true,
		dots:false,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay:false,
		speed:500,
		initialSlide:0,
		draggable:false,
		variableWidth:true,
		rows:2,
		
	});
});