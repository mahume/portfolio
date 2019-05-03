// Tab collapse functionality
$('.port-item').on('click', function() {
  $('.collapse').collapse('hide');
});
// Work portfolio image expansion
$(document).on('click', '[data-toggle="lightbox"]', function(e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});
