//Exercise 1: Test Suite Array

//**Scenario:** Create an array to store test case names for a login module.

console.log("Test Suite: Login Module-->");

let testCases = ["Valid credentials", "Invalid password", "Empty username", "Empty password", "Remember me checkbox"];
   

   console.log("Test Cases:", testCases);
   console.log("Total Test Cases:", testCases.length);
   console.log("First Test Case:", testCases[0]);
   console.log("Last Test Case:", testCases[testCases.length - 1]);
   console.log();


   //Exercise 2: Test Results Tracker

   let testResults = [];

   console.log("Running Test Suite...\n");

    testResults.push("PASSED");
    testResults.push("PASSED");
    testResults.push("FAILED");
    testResults.push("PASSED");
    testResults.push("SKIPPED");

for (let i = 0; i < testResults.length; i++) {
    console.log(`Test Case ${i + 1} completed: ${testResults[i]}`);
}

// Summary of test results
console.log("\nTest Summary:");
console.log("Total tests run:", testResults.length);
console.log("Results:", testResults);
console.log("Contains failures:", testResults.includes("FAILED") ? "Yes (found at index " + testResults.indexOf("FAILED") + ")" : "No");

//Exercise 3: Test Data Management
console.log("Test Email Management-->");
let testEmails = ["user1@test.com", "user2@test.com", "user3@test.com"];
console.log("Initial emails : "+testEmails);
console.log("Count:", testEmails.length);

testEmails.push("user4@test.com");
console.log("After adding user4@test.com to end: ", testEmails);

testEmails.unshift("admin@test.com");
console.log("After adding admin@test.com to beginning: ", testEmails);

testEmails.pop();
console.log("After removing last email: ", testEmails);

testEmails.shift();
console.log("After removing first email: ", testEmails);

console.log("Final count : ", testEmails.length);

//Exercise 4: Test Score Analysis
console.log("Test Score Analysis-->");
let testScores = [85, 92, 78, 95, 88, 73, 90];
console.log("Total scores: ", testScores.length);
console.log("First score: ", testScores[0]);
console.log("Last score: ", testScores[testScores.length-1]);

console.log("Checking for specific scores...");
// Score 95 found: Yes (at index 3)
console.log("Score 95 found: "+ testScores.includes(95)? "Yes (at index "+testScores.indexOf(95)+ ")": "No"); //why + is not working for concatination??
console.log("Score 95 found: ", testScores.includes(95)? "Yes (at index "+testScores.indexOf(95)+ ")": "No");

// Score 100 found: No (index: -1)  
console.log("Score 100 found: ", testScores.includes(100)? "Yes (at index "+testScores.indexOf(100)+ ")": "No (index: "+testScores.indexOf(100)+")");


//Finding the highest and lowest scores
let maxScore = 0;
for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] > maxScore) {
        maxScore = testScores[i];
    }
}
    console.log("highest score is: ", maxScore);

let highestScore = Math.max(...testScores);
console.log("Highest score using spread operatoe: ", highestScore);

console.log("Finding lowest score...");
let minScore = testScores[0];
for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] < minScore) {
        minScore = testScores[i];
    }
}
console.log("Lowest score is: ", minScore);
let lowestScore = Math.min(...testScores);  
console.log("Lowest score using spread operator: ", lowestScore);

