// for paralax effects.
window.addEventListener('DOMContentLoaded', function () {
  var parallax = document.querySelector('.parallax');
  var scrollPosition = window.scrollY;
  var yPos = -(scrollPosition * 0.5); // Calculate the initial y-position for the background

  // Set the initial background position to remain centered vertically and parallax horizontally
  parallax.style.backgroundPosition = 'center ' + yPos + 'px';
});
