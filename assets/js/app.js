$(function() {
	
	
	
	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPosition = $(window).scrollTop();
	
	checkScroll(scrollPosition, introH);
	
	$(window).on("scroll resize", function(e) {
		introH = intro.innerHeight();
		scrollPosition = $(this).scrollTop();
		checkScroll(scrollPosition, introH);	
	});
	
	function checkScroll(scrollPosition, introH) {
		if( scrollPosition >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	
	
	
	/* Smooth scroll */
	$("[data-scroll]").on("click", function(e) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
		
		$("nav a").removeClass("active");
		$this.addClass("active");
		
		nav.removeClass("active"); // Забираем класс active у навигации
		
		$("html, body").animate({
			scrollTop: blockOffset 
		}, 900);
	});
	
	
	
	/* Menu nav toggle */
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	
	navToggle.on("click", function(e) {
		event.preventDefault();
		
		$(this).toggleClass("active");
		nav.toggleClass("active");
	});
	
	
	
	/* Collapse */
	$("[data-collapse]").on("click", function(e) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data('collapse');
		
		$(blockId).slideToggle();
	});
	
	
	
	/* reviews: https://kenwheeler.github.io/slick/ */
	$("[data-slider]").slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
		fade: false
	});	
	
	
	
}); 










