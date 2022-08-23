window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-logo").style.width = "150px";
    document.getElementById("nav-logo").style.padding = "20px 10px";
  } else {
    document.getElementById("nav-logo").style.width = "300px";
    document.getElementById("nav-logo").style.padding = "40px 20px";
  }
}