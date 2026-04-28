//Create `type-checking-demo.js` using typeof for all variables.

let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean

console.log("Type Checking Demo:");
console.log("-------------------");
console.log("First Name: ", firstName, " --> Type: ", typeof firstName);  
console.log("Last Name: ", lastName, " --> Type: ", typeof lastName);
console.log("User ID: ", userId, " --> Type: ", typeof userId);
console.log("Age: ", age, " --> Type: ", typeof age);     
console.log("Email: ", email, " --> Type: ", typeof email);
console.log("Is Active: ", isActive, " --> Type: ", typeof isActive);
console.log("Login Count: ", loginCount, " --> Type: ", typeof loginCount);
console.log("Average Score: ", averageScore, " --> Type: ", typeof averageScore);
console.log("Has Access: ", hasAccess, " --> Type: ", typeof hasAccess);    

