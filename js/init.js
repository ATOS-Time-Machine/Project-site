$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});

$(document).ready(function () {
  $('.parallax').parallax();
});

$(document).ready(function () {
  $('.pushpin').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
})