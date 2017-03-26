$(document).ready(function () {

  $('.scrollspy').scrollSpy();

  $('.parallax').parallax();

  $('.pushpin').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $('.slider').slider();
  
});