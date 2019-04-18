// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     // document.getElementById("navbar").style.top = "0";
//     // // document.getElementById("logoimg").style.display = 'block';
//     // document.getElementById("about").style.display = 'block';
//     // document.getElementById("offer").style.display = 'block';
//     // document.getElementById("money").style.display = 'block';
//     // document.getElementById("contact").style.display = 'block';
//   } else {
//     // document.getElementById("logoimg").style.display = 'none';
//     // document.getElementById("about").style.display = 'none';
//     // document.getElementById("offer").style.display = 'none';
//     // document.getElementById("money").style.display = 'none';
//     // document.getElementById("contact").style.display = 'none';
//     // document.getElementById("navbar").style.top = "-10px";
//   }
//   prevScrollpos = currentScrollPos;

// }

$(window).scroll(example);

function example() {
  var tempScrollTop = $(window).scrollTop();


if((tempScrollTop.toString())>=20){
  document.getElementById("navbar").style.background = "linear-gradient(#1d1c1b,#1d1c1b)";
  // rgba(213, 185, 172, 0.753),rgba(213, 185, 172, 0.9)
  document.getElementById("about").style.display = 'none';
  document.getElementById("offer").style.display = 'none';
  document.getElementById("money").style.display = 'none';
  document.getElementById("contact").style.display = 'none';
  $("#navbar a").css("font-size","130%")
  $("#navig").addClass( "ml-auto mr-auto" );

}
else{
  document.getElementById("navbar").style.background = "linear-gradient(transparent, transparent)";
  document.getElementById("about").style.display = 'block';
  document.getElementById("offer").style.display = 'block';
  document.getElementById("money").style.display = 'block';
  document.getElementById("contact").style.display = 'block';
  $("#navig").removeClass( "mr-auto" );
  $("#navbar a").css("font-size","130%")
  // $('.navbar').fadeOut();
  // $('.navbar').fadeIn();
}
};