// Allow scrolling on the entire document
document.body.style.userSelect = 'text'; // Revert the user-select property for the body

// Array of element IDs you want to disable text selection for
var elementIDs = ['tnc', 'shipping', 'policy'];

// Loop through the array and add event listeners to disable text selection
elementIDs.forEach(function (id) {
    var specificElement = document.getElementById(id);
    if (specificElement) {
        specificElement.addEventListener('selectstart', function (e) {
            e.preventDefault();
        });
    }
});

