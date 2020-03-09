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
     *
     */
    function Main() {

        // Change large button text
        let lrgButton = document.getElementById("largeButton");
        lrgButton.textContent = "Learn More";

        // Display name and ID in an h3 element
        let displayInfo = document.createElement("h3");
        displayInfo.textContent = "Josh Bakos | 100652490";
        contentArea.insertBefore(h3, lrgButton);

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

