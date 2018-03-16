// Script for toggling navigation depending on the screen size

$(function() {
  $('.toggleNav').on('click', function() {
    $('.flex-nav ul').toggleClass('open');
  });
});
