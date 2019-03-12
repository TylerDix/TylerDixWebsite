// When the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// scrolly effect

$("a[href^='#']").click(function(e) {
  e.preventDefault();
  
  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
    scrollTop: position
  } /* speed */ );
});