// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 80 * (i+1)
  })
	;

	$.fn.jQuerySimpleCounter = function( options ) {
		var settings = $.extend({
				start:  0,
				end:    100,
				easing: 'swing',
				duration: 400,
				complete: ''
		}, options );

		var thisElement = $(this);

		$({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(mathCount);
		},
		complete: settings.complete
	});
};

$('#number1').jQuerySimpleCounter({end: 14542423633,duration: 356000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});


/*
	Caminar by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Gallery.
			$('.gallery').poptrox();

	});

})(jQuery);