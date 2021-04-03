$(document).ready(function(){
	$('.testimonial-slider').slick({
		centerMode:false,
		arrows:false,
		dots:true,
		slidesToShow:2,
		autoplay:false,
		speed:500,
		initialSlide:0,
		draggable:true,
	});
});

$( document ).ready( function () {
    var url = window.location.href.substr( window.location.href.lastIndexOf( '/' ) + 1 );
    $( '.navbar-nav a' ).each( function () {
        if( $( this ).attr( 'href' ) === url || $( this ).attr( 'href' ) === '' ) {
            $( this ).parent( 'li' ).addClass( 'active' );
        }
    });
});

var mixer = mixitup('.gallery-filt');

