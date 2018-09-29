'use strict';

window.onload = function () {
	console.log('init');
	
	$('.fold__heading').click(function (e) {
		if(!$(this).parents('.fold').hasClass("inactive")) {
			$(this).parents('.folder').find('.fold__content').slideUp();
			$(this).stop(true, true).next().slideDown();
		}
	});
	
	$('.slides_container .slide:first-child').show();
	
	var buttons = $('.buttons').find('span');
	
	$(buttons).click(function () {
		var index = buttons.index(this);
		var slides = $('.slide');
		$('.slide:visible').fadeOut();
		slides.eq(index).fadeIn();
	});
	
	
	// var folders = document.querySelectorAll('.folder');
	
	// for (var i = 0; i < folders.length; i++) {
		// folders[i].addEventListener('click', slide, false);
	// }
	
	// function slide (e) {
		// var activeFold = e.currentTarget.querySelector('.active');
		// var classesList = ' ' + e.target.classList + ' ';
		// var inactive = (' ' + e.target.parentNode.classList + ' ').indexOf('inactive');
		
		// var foldContent = e.target.nextElementSibling;
		
		// var isAnimating = false;
		
		// if (e.target.tagName !== 'DIV' || classesList.indexOf('fold__heading') == -1 || inactive > -1) {
			// return;
		// }
		
		// activeFold.classList.remove('active');
		// e.target.parentNode.classList.add('active');
	// }	
}
