// Function to update the timer text
        function updateTimer() {
            var timerElement = document.getElementById('timer');
            var seconds = 30;
            var timer = setInterval(function() {
                timerElement.textContent = seconds + ' seconds...';
                seconds--;
                if (seconds < 0) {
                    clearInterval(timer);
                    window.location.href = "../index.html"; // Redirect to the home page
                }
            }, 1000);
        }

        // Call the updateTimer function when the page loads
        window.onload = function() {
            updateTimer();
        };