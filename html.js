window.addEventListener('DOMContentLoaded', function(){
  //스크롤 이벤트 처리
  window.addEventListener("scroll", function(event){
      if(document.querySelector('.bar') != null)setProgress();
  });
});
*-////*-


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

