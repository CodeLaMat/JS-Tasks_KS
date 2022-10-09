"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
//  * @param {string}
 */

function assignGrade(score) {
    if (score>=95) {
    console.log ("You got a grade" + " A" );
    } if (score<95 && score>=65) {
    console.log ("You got a grade" + " B" );
    }

}

assignGrade(75);

// console.log("You got a " + assignGrade(95));
// console.log("You got a " + assignGrade(65));
