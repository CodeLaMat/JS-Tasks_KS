"use strict";
/**
Implement the function canVote such that it returns true whenever the age 18 or above
and false in all other scenarios.

 * @param {number} age
 */


function canVote(age) {
  
    if (age >=18) {
    console.log ("true");
} else {
    console.log ("false");
} 
}
  let canVote = 16;
  
// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false
