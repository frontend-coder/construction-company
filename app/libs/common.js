$(document).ready(() => {
  const $toggleButton = $('.toggle-button');
  const $menuWrap = $('.menu-wrap');
  const $sidebarArrow = $('.sidebar-menu-arrow');
  // Hamburger button
  $toggleButton.on('click', function () {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
    $('body').toggleClass('body_fixed');
    $('html').toggleClass('body_fixed');
  });
  // Sidebar navigation arrows
  $sidebarArrow.click(function () {
    $(this).next().slideToggle(300);
  });


  const checkStickyMenu = function () {
    if ($(window).scrollTop() > $('#slider_visible').offset().top) {
      $('.top_menu_slider').addClass('top_menu_slider_active ');
    } else {
      $('.top_menu_slider').removeClass('top_menu_slider_active ');
    }
  };
  $(window).on('scroll', () => {
    checkStickyMenu();
  });


  $(window).on('scroll', () => {
    checkStickyMenu('slow');
    // console.log("scroll " + "win scroll: " + $(window).scrollTop() + " secnav: " + parseInt($(".top_line_menu").offset().top));
  });
  checkStickyMenu();

  $('.searchbutton').click(function () {
    $(this).toggleClass('active');
    $('.search-form').slideToggle();
  });

  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  $('form').submit(function () { // Change
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', // Change
      data: th.serialize(),
    }).done(() => {
      $('.forms-calldecor .success').addClass('active');
      setTimeout(() => {
        // Done Functions
        $('.forms-calldecor .success').removeClass('active');
        th.trigger('reset');
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  // castom code
});
