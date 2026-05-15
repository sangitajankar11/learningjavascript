//Arrays are used to store multiple values in a single variable. They are ordered, indexed and mutable.
//mutable means we can change the values of the array after it is created. We can add, remove or modify elements in the array. Arrays are zero indexed, which means the first element of the array is at index 0, the second element is at index 1 and so on. We can access the elements of the array using their index. We can also use various methods available for arrays to manipulate them.
//ordered means the elements in the array are stored in a specific order and we can access them using their index. The order of the elements in the array is determined by the order in which they were added to the array. We can also sort the elements of the array using various sorting methods available for arrays.
//Arrays can contain any type of data, including numbers, strings, objects, and even other arrays.
//functions available inside array--> push, pop, shift, unshift, indexOf, includes, slice, splice, etc.

let testResults = ["PASSED", "FAILED", "PASSED"];
 
console.log(testResults);
testResults[0] = "FAILED";
 
console.log(testResults);
testResults[3] = "SKIPPED";
//testResults[7] = "IGNORED";
console.log(testResults);
testResults.push("EXECUTING..."); //add element at the end of the array
console.log(testResults);
testResults.unshift("ABORTED"); //add element at the beginning of the array
console.log(testResults);
testResults.pop(); //remove element from the end of the array
console.log(testResults);
testResults.shift(); //remove element from the beginning of the array
console.log(testResults);
 
testResults.shift();
console.log(testResults);
 
console.log(testResults.indexOf("ABORTED"));
let valueReturnedFromFunction = "FAILED";
if (testResults.indexOf(valueReturnedFromFunction) !== -1) { //
  console.log("✗ At least one test FAILED");
} else {
  console.log("✓ No failures detected");
}
 
let allTests = ["Login", "Logout", "Search", "Checkout", "Payment"];
 
let selectedTests = [];
selectedTests[0] = "Logout";
selectedTests[1] = "Search";
console.log(selectedTests);
 
//slice --> extracts portion of array and does not modify original array.
let selectedTestsInBetterWay = allTests.slice(1, 3); //3 not included. exracting a portion of the array from index 1 to index 2. This will return a new array that contains the elements from index 1 to index 2 of the allTests array. The original allTests array will not be modified.
console.log(selectedTestsInBetterWay);
console.log(allTests);
 
let tellMeOutput = allTests.slice(2); //this will return a new array that contains the elements from index 2 to the end of the array. The original allTests array will not be modified.
console.log(tellMeOutput);
tellMeOutput = allTests.slice(-2); //this will return the last two elements of the array. The first parameter -2 means start from the second last element, and the second parameter is not provided, so it will return all the elements from that position to the end of the array.
console.log(tellMeOutput);
tellMeOutput = allTests.slice(); //this will copy original array
console.log(tellMeOutput);
 
//splice --> modifies original array and can be used to add, remove or replace elements in the array. The first parameter is the index at which to start changing the array, the second parameter is the number of elements to remove, and the third parameter (and any subsequent parameters) are the elements to add to the array.
let removed;
testList = ["Login", "Logout", "Search", "Checkout"];
removed = testList.splice(2, 2);
console.log("  Removed: " + removed);
console.log("  Array now: " + testList);
 
testList.splice(1, 0, "Home", "Search"); //insert without deleting anything
console.log("  Array now: " + testList);
testList.splice(2, 1, "NewTest"); //insert at index 2 but before that remove the element at index 2
console.log("  Array now: " + testList);
testList.splice(1, 2, "NewA", "NewB", "NewC");
console.log("  Array now: " + testList);
testList.splice(-2, 2); // this will remove the last two elements of the array. The first parameter -2 means start from the second last element, and the second parameter 2 means remove 2 elements from that position.
console.log("  Array now: " + testList);
console.log(testList.includes("FAILED"));