window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var videoElement = document.getElementById("video-bg")
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
  } else {
    header.classList.remove("sticky");
    
  }
  if (window.pageYOffset > videoElement.clientHeight - 300) {
    header.classList.add("headerbg");
  } else {
    header.classList.remove("headerbg");
  }
}
