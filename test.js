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
window.addEventListener('DOMContentLoaded', function(){
    //스크롤 이벤트 처리
    window.addEventListener("scroll", function(event){
        if(document.querySelector('.progress-bar') != null)setProgress();
    });
});
$(window).scroll(function() {

    var wins = $(this).scrollTop();
    // var wins = document.documentElement.scrollTop;
    var hei = $(".content").outerHeight();
    var hei2 = $(window).outerHeight();
    // var hei = document.documentElement.scrollHeight;
    // var hei2 = document.documentElement.clientHeight;
    
    var height = hei - hei2;
    var bar = (wins / height) * 100;
    $('#myBar').css('width', bar + '%');
    // document.querySelector(".myBar").style.width = percentage + "%";//프로그래스바 너비 변경
  
});
  