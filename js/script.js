$(function () {


  $(".lineup").on("click",function(){
    $(".lineup-menu").slideToggle();
    $(".lineup-menu").toggleClass("active");
  });

  $('.itembtn').click(function() {
    $('.modal-wrapper').fadeIn();
  });

  $('.close').click(function() {
    $('.modal-wrapper').fadeOut();
  });

  $('header a,footer a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, 600);
  });

$('.slider').slick({
  autoplay:true, // 自動再生
  autoplaySpeed:3000, // スライド切り替えの時間
  dots:true
});

  // $(".fa-bars").on("click",function(){
  //   $(".header-menu").slideToggle();
  //   $(".header-menu").toggleClass("active");
  // });


});