//Javascript for my website to add some special effects
document.addEventListener("DOMContentLoaded", function() {
    // Function to type out the text
    function typeText(element, text) {
        var index = 0;
        // Clear the text content
        element.textContent = "";
        // Function to add the next character to the text content
        function addNextCharacter() {
            // Base case: if index exceeds text length, stop
            if (index >= text.length) return;
            // Add the next character to the text content
            element.textContent += text.charAt(index);
            // Schedule the next character to be added after a short delay (e.g., 100 milliseconds)
            setTimeout(addNextCharacter, 100);
            index++;
        }
        // Start typing out the text
        addNextCharacter();
    }

    // Typing effect for "Hello World" text
    typeText(document.getElementById("hello-text"), "Hello World, I'm");

    // Professions Slideshow
    var professions = ["Software Engineer", "Student at the University of Chicago"];
    var professionIndex = 0;
    var professionElement = document.getElementById("profession");

    // Function to update the profession text with typing effect
    function updateProfession() {
        setTimeout(function() {
            professionElement.textContent = "";
            // Type out the new profession text
            typeText(professionElement, professions[professionIndex]);
            // Update the profession index for the next iteration
            professionIndex = (professionIndex + 1) % professions.length;
        }, 500); // Adjust the delay as needed (milliseconds)
    }

    // Update the profession text initially
    updateProfession();

    // Update the profession text every 3 seconds
    setInterval(updateProfession, 7000);
});