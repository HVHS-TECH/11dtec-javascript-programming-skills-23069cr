/*
t13_validation.js Coby 13/05/2025, Validation JavaScript
*/

//Variables
var Age
/*
 Main code
 */
Age = prompt("How old are you?");

 if(Age == null || Age=="" || Age == " "){
    prompt("INVALID! YOU MUST ENTER A NUMBER FOR YOUR AGE!!!!")
 }
 if(Age < 0 ||  Age > 130){
    Age = prompt("YOU HAVEN'T LEARNED!!! YOUR AGE CANNOT BE IN THE NEGATIVES AND YOU'RE DEFINITLY NOT OVER 130 YEARS OLD!!!!!!!!!!!!!!")
 }
 if(Age > 0 ||  Age < 130){
    Age = alert("Thank you for your service =)")
 }
 /* 
 Functions
 */
