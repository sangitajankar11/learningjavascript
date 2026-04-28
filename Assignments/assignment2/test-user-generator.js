/*
**Requirements:**
- Create 3 different test users
- Each user should have: firstName, lastName, email, password
- Use descriptive variable names (user1FirstName, user1Email, etc.)
- Print all users in a formatted table-like structure

USER 1:
--------
Name: John Doe
Email: john.doe@test.com
Password: JohnPass@123

*/

console.log("");
console.log("===================================================");
console.log("        TEST USER GENERATOR            ");
console.log("====================================================");
console.log("");

let userID;
let userFirstname;
let userLastname
let email;
let password;


function userDetails (userID, userFirstname,userLastname, email, password){
    console.log("User " + userID + ":");
    console.log("----------------");
    console.log("Username: " + userFirstname + " " +userLastname);
    console.log("Email: " + email);
    console.log("Password: "+ password);
    console.log("");
}

userDetails("1", "Sangita", "Jankar", "abc@abc.com", "abc1234");
userDetails("2", "John", "Smith", "test@test.com", "John1234");
userDetails("3", "Rahul", "Dravid", "rahul@gmail.com", "Rahul1234");

console.log("===================================================");
console.log("        TOTAL USERS: 3            ");
console.log("====================================================");
