$('document').ready(function(){
    
    /* Stick header */
    var $headerStick = $('.Sticky');
    $(window).on("scroll", function () {
    	if ($(this).scrollTop() > 80) {
    		$headerStick.addClass("sticky_element");
    	} else {
    		$headerStick.removeClass("sticky_element");
    	};
    });

    /* Cart dropdown */
    $('.dropdown-cart, .dropdown-access').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
    });   
    
    /* owl-carousel */   
    $('.product-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: false,
        nav:true,
        loop:false,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:2
            },
            768:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });

    /* Services Slider */   
    $('.services_sec').owlCarousel({
        loop:false,
        responsiveClass:true,
        nav:false,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            375:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                mouseDrag:false,
                touchDrag:false,
                autoplay: false
            }
        }
    });
 
    /* sideslider */
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });

    /* close button */
    $(".close_btn").click(function(){
        $(".side-collapse").toggleClass("in");
    });
  
    /* Price Range */    
    $( function() {
    	$( "#slider-range" ).slider({
    		range: true,
    		min: 0,
    		max: 500,
    		values: [ 75, 300 ],
    		slide: function( event, ui ) {
    			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    		}
    	});
    	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    	" - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });

    /* dropdown-toggle */  
    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown').slideToggle("fast");
    });
    $('.dropdown-toggle-category').click(function(){
       $(this).next('.dropdown-category').slideToggle("fast");
    });  
});