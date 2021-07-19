/*   window.onscroll = function() {
  myFunction()
   };
   
   function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight; 
  var height2 = document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  
  alert(height)
   }   */

   $(window).scroll(function() {

    var wins = $(this).scrollTop();
    var hei = $('.content').outerHeight();
    var hei2 = $(window).outerHeight();
    var height = hei - hei2;
    var bar = (wins / height) * 100;
  
    $('#myBar').css('width', bar + '%');
  
  });
  