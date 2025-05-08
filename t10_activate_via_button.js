/*
t10_activate_via_button.js Coby 6/05/2025, button JavaScript
*/

//Variables
var userMoney = 0;
var random = Math.random();
var final = random * 2;
/*
 Main code
 */

 
 /* 
 Functions
 */
function start() {
    userMoney = userMoney + 1;
console.log(userMoney + 1)
}

function button() {
    Math.random(2);
    userMoney = userMoney * 2;
    userMoney = userMoney / 2;
console.log(userMoney + Math.random)
}