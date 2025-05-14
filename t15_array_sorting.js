/*
t15_arrays.js Coby 14/05/2025, Arrays JavaScript
*/
console.log("Running t15_arrays.js");
//Variables

let classArray = ["John Money $1.51", "Druggy Magee $1.52", "Dose Over $0.87", "George W. Bush $16"];
displayClass();

let newPerson = prompt("What is your name")
let price = prompt("How much do you think you're worth?")
classArray.push(newPerson + " "+ price);
let message =("These are the people for sale, do what you want with them")

for (i = 0; i  < classArray.length; i++){
    message = message + "\nPerson "+ i +" is "+classArray[i];
}
alert(message)
/*
 Main code
 */

 /* 
 Functions
 */
function displayClass(){

}