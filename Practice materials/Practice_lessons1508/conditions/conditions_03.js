"use strict";

/**
 * @param {number} age
 */
function canVote(age) {
    if (age>=18) {
        console.log ("The voting age is not sufficient");
    } else {
        console.log ("The voting age is sufficient");
    }
}



// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false
