let testSuiteName = "REGRESSION TEST SUITE";
let testID;
let testScenario;
let isPassed;
let totalTests=5;
let passedTCs=3;
let failedTCs=2;


console.log("=======================================");
console.log("        " + testSuiteName);
console.log("=======================================");
console.log("");

/*
let test1 = "Test 1: Check the title of login page";
let statusOfTest1 = "PASSED";
console.log(test1);
console.log("STATUS : " + statusOfTest1);
console.log("");

let test2 = "Test 2: Check email should not accepts any text withput domain name";
let statusOfTest2 = "FAILED";
console.log(test2);
console.log("STATUS : " + statusOfTest2);
console.log("");

let test3 = "Test 3: User is able to login";
let statusOfTest3 = "PASSED";
console.log(test3);
console.log("STATUS : " + statusOfTest3);
console.log("");

let test4 = "Test 4: User able to accept T&C's";
let statusOfTest4 = "FAILED";
console.log(test4);
console.log("STATUS : " + statusOfTest4);
console.log("");

let test5 = "Test 5: User can see all his accounts are displayed";
let statusOfTest5 = "PASSED";
console.log(test5);
console.log("STATUS : " + statusOfTest5);
console.log("");
*/


function testReporter(testcaseID, testScenario, isPassed){
    console.log("Test " +testcaseID +": " +testScenario );
    console.log("STATUS : " + isPassed);
    console.log("");

}
testReporter("1", "User can see all his accounts are displayed", "PASSED");
testReporter("2", "Check the title of login page", "PASSED");
testReporter("3", "Check email should not accepts any text withput domain name", "FAILED");
testReporter("4", "User is able to login", "PASSED");
testReporter("5", "User able to accept T&C's", "FAILED");

console.log("=======================================");
console.log("        TEST SUMMARY            ");
console.log("=======================================");
console.log("");

console.log("Total Tests: " + totalTests );
console.log("PASSED : " + passedTCs);
console.log("FAILED : " + failedTCs);
console.log("=======================================");





