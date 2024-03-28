// JavaScript to hide the overlay when the user hovers over the video
document.addEventListener("DOMContentLoaded", function() {
  // Assuming videoContainer and overlay are DOM elements with these IDs.
  const videoContainer = document.getElementById('videoContainer');
  const overlay = document.getElementById('overlay');

  // Check if the elements exist before adding event listeners.
  if (videoContainer && overlay) {
    videoContainer.addEventListener('mouseenter', () => {
      overlay.style.display = 'none';
    });

    videoContainer.addEventListener('mouseleave', () => {
      overlay.style.display = 'block';
    });
  } else {
    console.error("One or both of the elements (videoContainer and overlay) are not found in the DOM.");
  }
});
