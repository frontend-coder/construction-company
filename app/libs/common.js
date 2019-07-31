$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});
	$('body, .top-menu ul li a').click(function () {
		$('.hidden-mnu').hide("slow");
	});


$('.searchbutton').click(function(){
  $(this).toggleClass('active');
  $('.search-form').slideToggle();
});






// function func(e) {
//   if (e.value.indexOf(".") != '-1') {
//     e.value=e.value.substring(0, e.value.indexOf(".") + 2); // цифра 4, устанавливает количество цифр после запятой,
//                                                             //т.е. если 4, то максимум 3 цифры после запятой
//   }
// }















































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