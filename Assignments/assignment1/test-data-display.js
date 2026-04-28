/*
**Requirements:**
- Print 3 different test users with their details
- Each user should have: username, email, and password
- Format it nicely so it's easy to read
*/

let username;
let email;
let password;
let userNumber

function userDetails (userNumber, username, email, password){
    console.log("User " + userNumber + ":");
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: "+ password);
    
}

userDetails("1","Sachin", "sachin@test.com", "pass123");
console.log("");
userDetails("2","Rohit", "rohit@test.com", "test@123");
console.log("");
userDetails("3","Virat", "virat@test.com", "cricket123");
console.log("");

console.log("Test data generation complete!");



