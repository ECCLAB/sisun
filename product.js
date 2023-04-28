(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){나캠든wjddyd
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
  })(jQuery);

  // top 스크롤 버튼

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

// ------------------

$(function(){
	$('.carousel-item').eq(0).addClass('active');
	var total = $('.carousel-item').length;
	var current = 0;

	$('#moveRight').on('click', function(){
	  var next=current;
	  current= current+1;
	  setSlide(next, current);
	});

	$('#moveLeft').on('click', function(){
	  var prev=current;
	  current = current- 1;
	  setSlide(prev, current);
	});
	function setSlide(prev, next){
	  var slide= current;
	  if(next>total-1){
	   slide=0;
		current=0;
	  }
	  if(next<0){
		slide=total - 1;
		current=total - 1;
	  }
			 $('.carousel-item').eq(prev).removeClass('active');
			 $('.carousel-item').eq(slide).addClass('active');
		setTimeout(function(){
  
		},800);
	  
  
	  
	  console.log('current '+current);
	  console.log('prev '+prev);
	}

  });