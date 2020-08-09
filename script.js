$(function () {
  $('.itembtn').click(function() {
    $('.modal-wrapper').fadeIn();
  });

  $('.close').click(function() {
    $('.modal-wrapper').fadeOut();
  });

  $('.contact').click(function() {
    $('.modal-contact').show();
  });

  $('.close').click(function() {
    $('.modal-contact').hide();
  });

  $('header a,footer a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, 600);
  });

});