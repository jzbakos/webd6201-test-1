/*
    Student Name  : Josh Bakos
    StudentID     : 100652490       
    Date Completed: 2020-03-08
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function (app) {

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start() {
        Main();
    }

    /**
     * Main Program entry point is here
     */
    function Main() {

        // Change large button text
        let lrgButton = document.getElementById("largeButton");
        lrgButton.textContent = "Learn More";

        // Display name and ID in an h3 element
        let displayInfo = document.createElement("h3");
        displayInfo.textContent = "Josh Bakos | 100652490";
        contentArea.insertBefore(displayInfo, lrgButton);

        // Replace paragraph text
        let firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";

        // Hide the already defined paragraph element from the display
        firstParagraph.style.display = 'none';

        // Event handler for lrgButton
        lrgButton.onclick = function () //Create the on click event
        {
            // If the paragraph is showing, hide the paragraph contents
            // Else, show the paragraph contents
            if (firstParagraph.style.display == "block") {
                lrgButton.textContent = "Learn More";
                // none = hidden
                firstParagraph.style.display = "none";
            }
            else {
                lrgButton.textContent = "Hide Details";
                // block = visible
                firstParagraph.style.display = "block";
            }
        }
    }

    window.addEventListener("load", Start);
})(app || (app = {}));

