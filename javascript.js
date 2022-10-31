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

// Creating element for missmatch passwords
const notMatch = document.createElement("span");
notMatch.textContent = "Passwords don't match!!!";
notMatch.style.display = "none";
notMatch.style.color = "red";
notMatch.style.fontSize = ".8rem";
rightForm.appendChild(notMatch);

//console.log(passwordOne);
//console.log(passwordTwo);
//console.log(leftForm);
//console.log(rightForm);

function checkPasswords() {
  if (passwordOne.value === passwordTwo.value) {
    console.log("match");
    notMatch.style.display = "none";
    passwordOne.style.border = "1px solid #e5e7eb";
    passwordTwo.style.border = "1px solid #e5e7eb";
  } else if (
    passwordOne.value != passwordTwo.value &&
    passwordOne.value != "" &&
    passwordTwo.value != ""
  ) {
    console.log("no match");
    notMatch.style.display = "initial";
    passwordOne.style.border = "1px solid red";
    passwordTwo.style.border = "1px solid red";
  }
}
