$(document).ready(() => {
  $('ul li:has(ul)').addClass('has-submenu');
  $('ul li ul').addClass('sub-menu');
  $('ul.dropdown li').hover(
    function () {
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover');
    },
  );
  const $menu = $('#menu');
  const $menulink = $('#spinner-form');
  // const $search = $('#search');
  // const $search_box = $('.search_box');
  const $menuTrigger = $('.has-submenu > a');
  $menulink.click((e) => {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    // if ($search.hasClass('active')) {
    //   $('.menu.active').css('padding-top', '50px');
    // }
  });
  // $search.click((e) => {
  //   e.preventDefault();
  //   $search_box.toggleClass('active');
  // });
  $menuTrigger.click(function (e) {
    e.preventDefault();
    const t = $(this);
    t.toggleClass('active').next('ul').toggleClass('active');
  });
  $('ul li:has(ul)');

  function scrollMenu() {
    const objToStick = $('.top_line_menu');
    if ($(window).scrollTop() > 150) {
      $(objToStick).addClass('active');
    } else {
      $(objToStick).removeClass('active');
    }

    if ($(window).scrollTop() > 550) {
      $(objToStick).addClass('visible');
    } else {
      $(objToStick).removeClass('visible');
    }
  }
  window.addEventListener('scroll', () => {
    scrollMenu();
  });

  $('.searchbutton').click(function () {
    $(this).toggleClass('active');
    $('.search-form').slideToggle();
  });

  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  $('form').submit(function () {
    // Change
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
