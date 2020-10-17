$(document).ready(function(){
	$('.collapsible').collapsible();
	$('select').formSelect();
	$('.tabs').tabs();
	$('.carousel').carousel();
	$('.dropdown-trigger').dropdown();
	$('.rss-triger').dropdown();
	$('.more-menu').dropdown();
	$('.opinions').owlCarousel({
			loop:true, 
            margin:30, 
			autoplay:true,
			nav:true,
				responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1300:{
                        items:4
                    }
				}
				
	});	
	$('.lastnews').owlCarousel({
		loop:true, 
            margin:40, 
			autoplay:true,
            smartSpeed:1000, 
            autoplayTimeout:4000, 
			center: false,
			pagination : false,	
			nav:true,
				responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1300:{
                        items:3
                    }
				}
	});	
	$('.events').owlCarousel({
		loop:true, 
            margin:40, 
			autoplay:true,
            smartSpeed:1000, 
            autoplayTimeout:4000, 
			center: false,
			pagination : false,	
			nav:true,
				responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1300:{
                        items:4
                    }
				}
	});	
	$('.epopular').owlCarousel({
		loop:true, 
            margin:40, 
			autoplay:true,
            smartSpeed:1000, 
            autoplayTimeout:4000, 
			center: false,
			pagination : false,	
			nav:true,
				responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1300:{
                        items:4
                    }
				}
	});	
	$('.mainews').owlCarousel({
			animateOut: 'fadeOut',
			loop:true, 
			items:1,
	});	
	$('.dis').owlCarousel({
			animateOut: 'fadeOut',
			loop:true, 
            margin:30, 
            smartSpeed:1000, 
            autoplayTimeout:4000, 
			center: false,	
			pagination : false,			
			nav:true,
				responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:5
                    },
                    1300:{
                        items:7
                    }
				}
	
	});	
	$('.market').owlCarousel({
			animateOut: 'fadeOut',
			loop:true, 
            margin:40, 
			autoplay:true,
            smartSpeed:1000, 
            autoplayTimeout:4000, 
			center: false,
			pagination : false,	
			items:1,
			nav:true,
				responsive:{ 
                    0:{
                        items:2
                    },
                    600:{
                        items:4
                    },
                    1300:{
                        items:6
                    }
				}
	
	});	
	$(".rss-string").endlessScroll({ 
			width: "90%", 
			height: "22px", 
			steps: -2, 
			speed: 50, 
			mousestop: true 
		});

		
	$(".search-ico").click(function(){	
		$(".search-panel").show(300);
	});	
	
	$(".s-close").click(function(){	
		$(".search-panel").hide(300);
	});	
	
  });
  
	(function ($) {
    $.fn.endlessScroll = function (options) {

        var options = $.extend({ width: "400px", height: "100px", steps : -2, speed : 40, mousestop : true }, options);

        var elem = $(this);
        var elemId = $(this).attr("id");
        var istep = options.steps;

        elem.css({ "overflow": "hidden", "width": options.width, "height": options.height, "position": "relative", "left": "0px", "top": "0px" })
        elem.wrapInner("<nobr />");

        elem.mouseover(function () {
            if (options.mousestop) { istep = 0; }
        })
        elem.mouseout(function () {
            istep = options.steps;
        });
        
        elem.wrapInner("<div id='" + elemId + "1' />");
        var e1 = $('#' + elemId + "1");
        e1.css({ "position": "absolute" }).clone().attr('id', elemId + "2").insertAfter(e1);
        var e2 = $('#' + elemId + "2");
        Repos(e1, e2, options.steps > 0);

        var refreshId = setInterval(function () {
            e1.css({ "left": (parseInt(e1.css("left")) + istep) + "px" });
            e2.css({ "left": (parseInt(e2.css("left")) + istep) + "px" });
            if ((parseInt(e1.css("left")) < 0) || (parseInt(e1.css("left")) > e1.width())) {
                Repos(e1, e2, options.steps > 0);
            }
        }, options.speed);


        function Repos(e1, e2, fwd) {
            e1.css({ "left": (fwd) ? "0px" : e1.width() + "px" });
            e2.css({ "left": (fwd) ? (-1 * e1.width()) + "px" : "0px" });
        }

        return elem;
    }
})(jQuery);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 