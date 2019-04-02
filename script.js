$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});




$(document).ready(function(){
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.back_to_top').fadeIn();
} else {
$('.back_to_top').fadeOut();
  }
});
$('.back_to_top').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
   });
});

menu.onclick = function myFunction(){
  var x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
    x.className += " responsive";
  }
  else{
    x.className = "topnav";
  }
}