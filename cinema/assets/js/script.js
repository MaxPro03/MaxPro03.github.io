
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
  $('.banner_slider').slick({
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 5000
  });
});


$(document).ready(function(){
  $('.films-slider').slick({
   slidesToShow:5,
   slidesToScroll: 5,
   variableWidth:false,
   infinite:false,
  });
});

// Read More

var i = 0;
  function read(){
    if(!i){
      document.getElementById("more").style.
        display ="inline";
      document.getElementById("dots").style.
        display="none";
      document.getElementById("read").innerHTML="Свернуть";
      i = 1;
    }
    else{
      document.getElementById("more").style.
        display ="none";
      document.getElementById("dots").style.
        display="inline";
      document.getElementById("read").innerHTML="Читать дальше...";
      i = 0;
    }
  }

  var i = 0;
  function read2(){
    if(!i){
      document.getElementById("more-2").style.
        display ="inline";
      document.getElementById("dots-2").style.
        display="none";
      document.getElementById("read-2").innerHTML="Свернуть";
      i = 1;
    }
    else{
      document.getElementById("more-2").style.
        display ="none";
      document.getElementById("dots-2").style.
        display="inline";
      document.getElementById("read-2").innerHTML="Читать дальше...";
      i = 0;
    }
  }

$(document).ready(function(){
  $('.interviews-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    variableWidth:false,
    infinite:false,
  });
});