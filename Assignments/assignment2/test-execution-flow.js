/*
**Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses
*/

console.log("===================================================");
console.log("        TEST EXECUTION FLOW            ");
console.log("====================================================");
console.log();

const TEST_NAME = "Login Functionaloity test";
let tester = "John";

let testStatus = "IN PROGRESS";
let stepNumber = "Step 1: Opening browser"

console.log("Test Name: " +TEST_NAME);
console.log("Tester: " +tester);
console.log();

console.log(stepNumber);
console.log("STATUS: " +testStatus);
console.log();

stepNumber="Step 2: Navigating to login page";
console.log(stepNumber);
console.log("STATUS: " +testStatus);
console.log();

stepNumber="Step 3: Entering credentials";
let username = "testuser@example.com";
console.log(stepNumber);
console.log("Username: " +username);
console.log("STATUS: " +testStatus);
console.log();

stepNumber="Step 4: Clicking login button";
console.log(stepNumber);
console.log("STATUS: " +testStatus);
console.log();

stepNumber="Step 5: Verifying dashboard";
console.log(stepNumber);
testStatus="COMPLETED";
console.log("STATUS: " +testStatus);
console.log();

console.log("===================================================");
console.log("        Final Status: PASSED            ");
console.log("        Test Duration: 2.5 seconds      ");
console.log("====================================================");












