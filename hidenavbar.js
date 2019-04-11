var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("logoimg").style.display = 'block';
    document.getElementById("about").style.display = 'block';
    document.getElementById("offer").style.display = 'block';
    document.getElementById("money").style.display = 'block';
    document.getElementById("contact").style.display = 'block';
    document.getElementById("navbar").style.background = "linear-gradient(rgba(213, 185, 172, 0.753),rgba(213, 185, 172, 0.329),transparent)";
  } else {
    document.getElementById("logoimg").style.display = 'none';
    document.getElementById("about").style.display = 'none';
    document.getElementById("offer").style.display = 'none';
    document.getElementById("money").style.display = 'none';
    document.getElementById("contact").style.display = 'none';
    document.getElementById("navbar").style.top = "-10px";
    document.getElementById("navbar").style.background = "rgba(213, 185, 172)";
  }
  prevScrollpos = currentScrollPos;
}