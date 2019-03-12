// When the user scrolls down 420px from the top of the document, slide down the navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// scrolly effect

  $(document).ready(function(){
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset(). - 160
      }, 1100, function(){

        window.location.hash = hash;
        });
      } // End if
    });
  })