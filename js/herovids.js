document.addEventListener("DOMContentLoaded", function() {
  // Select elements by class name
  const videoContainer = document.querySelector('.video-container');
  const overlay = document.querySelector('.overlay');

  // Check if the elements exist before adding event listeners
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
