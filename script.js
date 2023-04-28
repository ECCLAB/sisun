



  const Boxlayout = (() => {
    const wrapper = document.body,
      sections = [...document.querySelectorAll(".section")],
      closeButtons = [...document.querySelectorAll(".close-section")],
      expandedClass = "is-expanded",
      hasExpandedClass = "has-expanded-item";
  
    const initEvents = () => {
      sections.forEach((element) => {
        element.addEventListener("click", () => openSection(element));
      });
      closeButtons.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          closeSection(element.parentElement);
        });
      });
    };
  
    const openSection = (element) => {
      if (element.classList.contains(expandedClass)) return;
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
    };
  
    const closeSection = (element) => {
      if (!element.classList.contains(expandedClass)) return;
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
    };
  
    return { init: initEvents };
  })();
  
  Boxlayout.init();



 

// 카드슬라이드
window.location.href="#slide-1";
/* Please ❤ this if you like it! */





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
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery);