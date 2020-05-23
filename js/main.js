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

    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('data-target')).offset().top - 180
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });

    $(".faq .card-link").on("click", function() {
        $(".faq .card-link").removeClass("active"), $(this).addClass("active")
    });

    /* Cart dropdown */
    $('.mini-cart, .dropdown-access').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
    });

    $('[data-toggle="tooltip"]').tooltip();
    
    /* Slider */
    // Product Slider   
    $('.product-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: false,
        nav:true,
        autoplay: true,
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
                margin:20
            },
            1300:{
                items:5,
                margin:20
            }
        }
    });

    // Product Slider   
    $('.product-detail-slider').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        dots: false,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            375:{
                items:1
            },
            768:{
                items:1
            }
        }
    });

    // Product Image Slider   
    $('.product-details-image').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: false,
        responsive:{
            0:{
                items:1
            },
            375:{
                items:1
            },
            768:{
                items:1
            }
        }
    });

    // Services Slider   
    $('.services_sec').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        items: 5,
        mouseDrag: false,
        touchDrag: false,
    });

    // Blog Slider   
    $('.blog-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: true,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4,
                margin:20
            },
            1300:{
                items:5,
                margin:20
            }
        }
    });

    // Instagram Slider   
    $('.instagram-slider').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items: 4,
                margin: 20
            },
            1300:{
                items:5,
                margin:20
            }
        }
    });

    // Testimonial Slider   
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2
            },
            768:{
                items:3,
                margin:20
            },
            1000:{
                items: 4,
                margin: 20
            },
            1300:{
                items: 5,
                margin:20
            }
        }
    });

    // Toolbox Slider   
    $('.toolbox-slider').owlCarousel({
        loop: false,
        margin: 0,
        items:1,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        nav: true,
        navRewind: false,
        //autoHeight: true,
    });
 
    /* sideslider */
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
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

$(document).ready(function(){
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({'display': 'none','position': 'relative'});
                next_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function(){
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
                current_fs.css({'display': 'none','position': 'relative'});
                previous_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width",percent+"%")
    }

    $(".submit").click(function(){
        return false;
    })
});