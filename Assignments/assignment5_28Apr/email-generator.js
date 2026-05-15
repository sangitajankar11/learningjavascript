 //Part 1: Generate Test Emails

let firstName = "John";
let lastName = "Doe";

let email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@gmail.com";
console.log("Formatted email for user 1: " + email);

//email using template literals
email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
console.log("Formatted email for user 1 (using template literals): " + email);

console.log("--------------------------------------------------");

 firstName = "Shridhar";
 lastName = "Waghmode";
email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@gmail.com";
console.log("Formatted email for user 2: " + email);
//email using template literals
email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
console.log("Formatted email for user 2 (using template literals): " + email);

console.log("--------------------------------------------------");

firstName = "Sachin";
lastName = "Tendulakar";
email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@gmail.com";
console.log("Formatted email for user 3: " + email);
//email using template literals
email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
console.log("Formatted email for user 3 (using template literals): " + email);



