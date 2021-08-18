// flip card animation 
$( ".card__inner" ).on( "click", function() {
  $(this).toggleClass("is-flipped");
});

// check the screen size with agent
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  console.log('is mobile');
} else {
  console.log('isnt mobile');
}

// parallax effect after flipping the card
$( document ).ready(function() {
  // Destroy tilt
  $(".destroy").click(function(){
    var element = $(this).parents('.card');
    element.tilt.destroy.call(element);
  });
  // Reset tilt
    $('.reset').click(function(){
      $(this).parents('.card').tilt();
    });
});