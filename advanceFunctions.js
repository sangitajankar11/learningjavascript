"use strict";
/*
 
Revision
- functions with default parameters
- function without parameters
- function retruning values, objects
- declaring functions
- How to retun from if statements but inside a function
- Early return pattern of writing functions
 
 
*/
addDeclaration(1, 2); 
//when fuctions are not stored in a variable, we can call them before declaring them. This is called function hoisting. 
// The function declaration is hoisted to the top of the scope, so it can be called before it is defined in the code.
function addDeclaration(a, b) {
    return a + b;
}



//Functions in JavaScript are called first-class citizens. because of this, we can do a lot of things with functions that we can do with other data types. For example, we can assign a function to a variable, pass a function as an argument to another function, and return a function from another function.
//We can assign function to a variable.
//A function can return a function.
//A function can be passed as an argument to another function
//addExpression(10, 20); This is not allowed, calling a function expression before declaring because hoisting does not apply to function expressions.
// The variable that holds the function expression is hoisted, but it is not initialized until the assignment is evaluated. Therefore, trying to call the function before it is defined will result in a ReferenceError.

const addExpression = function (a, b) {
    return a + b;
};

 
console.log(addDeclaration(1, 2));
console.log(addExpression(10, 20));


//use of function as an expression  
const validate = function (email) {
  return email.includes("@");
};
let anotherValidate = validate;
console.log(anotherValidate("abc.abc.com")); //this will return false because the email does not contain @ symbol. The function validate is assigned to another variable anotherValidate, and we can use it to call the function as well.
 console.log(validate("test@test.com")); //this will return true because the email contains @ symbol. The function validate is called with the argument "


 //Array of a functions assigned to a variable
const validators = [
  function (val) {
    return val.length > 5;
  },
  function (val) {
    return val.includes("@");
  },
  function (val) {
    return val.includes(".");
  },
];
 
/*
let valLength = function (val) {
  return val.length > 5;
};
 
const valEmail = function (val) {
  return val.includes("@");
};
const valDot = function (val = "test@abc.com") {
  return val.includes(".");
};
 
const validateEmails = [valLength, valEmail, valDot];
 --> this is the same as the above array of functions, but we are defining the functions separately and then 
 adding them to the array. The above array of functions is more concise and easier to read.
*/
 console.log(validators);
 
console.log(validators[0]("test@testcom"));
console.log(validators[2]("abc@testcom"));//this will return false because the email does not contain . symbol. The function at index 2 of the validators array is called with the argument "abc@testcom", and it checks if the email contains a dot (.) symbol. Since it does not, it returns false.
 
let testEmail = "abc@testcom";

for (let i = 0; i < validators.length; i++) {
    console.log(`  Validator ${i + 1}: ` + validators[i](testEmail));
}

//early return pattern of writing functions. This is a common pattern used to write functions that have multiple conditions. 
// Instead of nesting if statements, we can use early return to exit the function as soon as a condition is met. 
// This makes the code more readable and easier to understand.
console.log("Test validate credentials function early return pattern...");
for (let i = 0; i < validators.length; i++) {
  if (!validators[i](testEmail)) {  //if the email does not pass the validation, we can return early from the function and not execute the rest of the code. This is called early return pattern.
    break;
  }
  console.log(`  Validator ${i + 1}: ` + validators[i](testEmail));
}
 
//There is something called higher order functions in JavaScript.
//Functions having parameters as functions or functions returning a function are called higher order functions

//below is example of a higher order function that returns a function. 
// The makeValidator function takes a parameter minLength and returns a new function that takes a password as an argument 
// and checks if the length of the password is greater than or equal to the minLength. 
// This allows us to create different validators for different minimum length requirements by calling makeValidator with different values for minLength.
function makeValidator(minLength) {
  return function abc(password) { // returns a new function that takes password as an argument
       return password.length >= minLength;
  };
}
//Basic password validation is it should be more than or equal to 6 characters
//Stricter password validation is it should be more than or equal to 12 characters
const validateBasic = makeValidator(6);
const validateStrict = makeValidator(12);
 
const pass = "abd@12";
validateStrict(pass);
validateBasic(pass);

console.log(validateBasic(pass)); //this will return true because the password is more than 6 characters. The validateBasic function is called with the argument "abd@12", and it checks if the length of the password is greater than or equal to 6. Since it is, it returns true.
console.log(validateStrict(pass)); //this will return false because the password is less than 12 characters. The validateStrict function is called with the argument "abd@12", and it checks if the length of the password is greater than or equal to 12. Since it is not, it returns false.
