/*
t10_activate_via_button.js Coby 6/05/2025, button JavaScript
*/

//Variables
var number = 0;
var random = 0;
var final = 0;
/*
 Main code
 */

 
 /* 
 Functions
 */
function start() {
    number = number + 1;
console.log(number)
}

function button() {
    random = 2 * Math.random();
    number = number * random;
console.log(number);
}
