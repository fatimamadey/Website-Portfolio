// Javascript for my website to add some special effects
document.addEventListener("DOMContentLoaded", function() {
    // Function to type out the text with cursor
    function typeText(element, text) {
        var index = 0;
        var cursor = '|';
        element.textContent = '';

        // Function to add the next character or backspace
        function addNextCharacter() {
            // Base case: if index exceeds text length, stop
            if (index > text.length) {
                // After typing out the text, remove the cursor
                element.textContent = element.textContent.slice(0, -1);
                return;
            }

            // If the index is even, append the cursor
            if (index % 2 === 0) {
                element.textContent = text.substring(0, index) + cursor;
            } else {
                // If the index is odd, remove the cursor
                element.textContent = text.substring(0, index);
            }

            // Schedule the next character to be added or backspaced after a short delay
            setTimeout(function() {
                addNextCharacter();
            }, 100); // Adjust typing speed for natural effect

            index++;
        }

        // Start typing out the text
        addNextCharacter();
    }

    // Typing effect for "Hello World" text
    typeText(document.getElementById("hello-text"), "Hello World, I'm");

    // Professions Slideshow
    var professions = ["Software Engineer ", "Student at the University of Chicago "];
    var professionIndex = 0;
    var professionElement = document.getElementById("profession");

    // Function to update the profession text with typing effect
    function updateProfession() {
        // Clear the existing profession text
        professionElement.textContent = '';

        // Get the next profession text
        var newText = professions[professionIndex];

        // Function to type out the text with a cursor
        function typeWithCursor(text, index) {
            if (index <= text.length) {
                // Set the text with cursor up to the current index
                professionElement.textContent = text.substring(0, index) + '|';
                // Schedule the next character to be typed after a short delay
                setTimeout(function() {
                    typeWithCursor(text, index + 1);
                }, 100); // Adjust typing speed as needed
            } else {
                // After typing out the text, start erasing it
                setTimeout(function() {
                    eraseWithCursor(text, index);
                }, 10000); // Wait before erasing
            }
        }

        // Function to erase the text with a cursor
        function eraseWithCursor(text, index) {
            if (index >= 0) {
                // Set the text with cursor up to the current index
                professionElement.textContent = text.substring(0, index) + '|';
                // Schedule the next character to be erased after a short delay
                setTimeout(function() {
                    eraseWithCursor(text, index - 1);
                }, 100); // Adjust erasing speed as needed
            } else {
                // After erasing the text, move to the next profession
                setTimeout(function() {
                    professionIndex = (professionIndex + 1) % professions.length;
                    updateProfession(); // Update the profession text
                }, 500); // Wait before moving to the next profession
            }
            
        }

        // Start typing out the text with a cursor
        typeWithCursor(newText, 0);
    }

    // Update the profession text initially
    updateProfession();

    // Update the profession text every 3 seconds
    setInterval(updateProfession, 15000); // Adjust interval timing as needed
});
