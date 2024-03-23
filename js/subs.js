    document.getElementById("subscribe-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the form data
        const formData = new FormData(this);

        // Send form data to Google Form using XHR
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSe9cG8KPHB84Z08Fc8pwOunBFnQD8riTjQZZbISAqo35JnVxw/formResponse");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200 || xhr.status === 0) { // 0 for local file requests
                    // Handle successful form submission
                    alert("Thanks you for subscribing to our mailing list");
                    // Optionally reset the form fields
                    document.getElementById("email").value = "";
                } else {
                    // Handle failed form submission
                    console.error("Failed to submit form. Status:", xhr.status);
                    console.log("Response:", xhr.responseText);
                    alert("Failed to subscribe. Please try again later.");
                }
            }
        };
        xhr.send(formData);
    });
