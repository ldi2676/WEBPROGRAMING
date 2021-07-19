$(window).scroll(function() {

    var wins = $(this).scrollTop();
    var hei = $('.content').outerHeight(); //전체 페이지 높이
    var hei2 = $(window).outerHeight(); //윈도우의 높이
    var height = hei - hei2;
    var bar = (wins / height) * 100;
  
    $('#myBar').css('width', bar + '%');
  
  });