document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('iframe');

    if (video) {
      video.addEventListener('ended', function() {
        // Rewind the video to the beginning and play again
        this.contentWindow.postMessage(JSON.stringify({
          'event': 'command',
          'func': 'playVideo',
          'args': []
        }), '*');
      });
    } else {
      console.error("Video iframe not found in the DOM.");
    }

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