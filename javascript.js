/*     
GOALS: 
    Checking if passwords match in both input boxes
    Either do the checking when the create account button is pressed or automatically
    Change input box color and display text when passwords don't match
    If they do match and button is pressed make sure that box color is reset and incorrect text is gone 


PSUEDOCODE:
    if button is pressed
    check both password boxes
    if password box text equals the same thing allow sign up
    else if not equal same thing display text and red box
    repeat until they equal each other
*/

// Getting password inputs
const passwordOne = document.querySelector("#password");
const passwordTwo = document.querySelector("#passwordCheck");

// Getting form divs
const leftForm = document.querySelector(".leftForm");
const rightForm = document.querySelector(".rightForm");

console.log(passwordOne);
console.log(passwordTwo);
console.log(leftForm);
console.log(rightForm);

function checkPasswords() {
  if (passwordOne.value === passwordTwo.value) {
    console.log(passwordOne.value);
    console.log(passwordTwo.value);
  } else {
    console.log("hi");
  }
}
