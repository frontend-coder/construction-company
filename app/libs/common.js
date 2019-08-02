$(document).ready(function () {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
  $sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});





var nav = $('.top_line_menu');
var navburger = $('.toggle-button');
var bodyTegr = $('body');

	$(navburger).on('click', function () {
	$(this).toggleClass('f-burger');
		$(bodyTegr).toggleClass('body_fixed');
		nav.toggleClass('toplinehiden');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
		nav.addClass("f-nav").slideDown( "slow");
		navburger.addClass("f-navburger");

		} else {
			nav.removeClass("f-nav");
		navburger.removeClass("f-navburger");
		}
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {


		} else {

		}
	});






$('.searchbutton').click(function(){
  $(this).toggleClass('active');
  $('.search-form').slideToggle();
});







	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});