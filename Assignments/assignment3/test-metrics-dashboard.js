/*
Create `test-metrics-dashboard.js` showing test execution metrics.

**Use these data types:**
- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean)
*/

let totalTests = 50;                
let passedTests = 35;              
let failedTests = 15;              
let passRate = (passedTests / totalTests) * 100; // Number with decimal
let testSuiteName = "Login Functionality Tests"; 
let allTestsPassed = (failedTests === 0); 

console.log("Test Metrics Dashboard:");
console.log("-----------------------");
console.log("Test Suite Name: ", testSuiteName);
console.log("Total Tests: ", totalTests);
console.log("Passed Tests: ", passedTests);
console.log("Failed Tests: ", failedTests);
console.log("Pass Rate: ", passRate + "%");
console.log("All Tests Passed? ", allTestsPassed);
