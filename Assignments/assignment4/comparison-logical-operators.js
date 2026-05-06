let age = 18;

console.log("Age: ", age);

if (age >= 18 && age <= 65) {
  console.log("✅ Valid (Boundary)");
} else {
  console.log("❌ Age must be between 18 and 65");
}
console.log();
age = 17;
console.log("Age: ", age);
if (age >= 18 && age <= 65) {
  console.log("✅ Valid age range (18-65)");
} else {
  console.log("❌ Invalid (too young)");
}

console.log();
age = 65;
console.log("Age: ", age);
if (age >= 18 && age <= 65) {
  console.log("✅ Valid (boundary)");
} else {
  console.log("❌ Invalid (too old)");
}

console.log();
age = 66;
console.log("Age: ", age);
if (age >= 18 && age <= 65) {
  console.log("✅ Valid (boundary)");
} else {
  console.log("❌ Invalid (too old)");
}

console.log();
age = 25;
console.log("Age: ", age);
if (age >= 18 && age <= 65) {
  console.log("✅ Valid (in range)");
} else {
  console.log("❌ Invalid (not in range 18-65)");
}

console.log();

console.log("Checking credentials...");
let username = "testuser";
let password = "Test@123";
let email = "";

console.log("Username: ", username);
console.log("Password: ", password);
console.log("Email: ", email);

if ((username !== "" && password !== "") || email !== "") {
  console.log("✅ Sufficient login credentials");
} else {
  console.log(
    "❌ Insufficient credentials - provide username+password OR email",
  );
}

console.log();

console.log("Checking credentials...");

function validateCredentials(username, password, email) {
  console.log("Username: ", username);
  console.log("Password: ", password);
  console.log("Email: ", email);

  if ((username !== "" && password !== "") || email !== "") {
    console.log("✅ Sufficient login credentials");
  } else {
    console.log(
      "❌ Insufficient credentials - provide username+password OR email",
    );
  }
  console.log();
}

validateCredentials("testuser", "", "");
validateCredentials("", "", "test@example.com");


console.log("Test status validator....");

let status = "PASSED";
let errorCount = 0;

console.log("Test Status: ", status);
console.log("Error Count: ", errorCount);


//status is "PASSED" OR "SKIPPED") AND errorCount equals 0
if((status==="PASSED" || status === "SKIPPED") && errorCount === 0){
    console.log("✅ Test completed successfully");
}
else {
    console.log("❌ Test has issues");
}

console.log();

 status = "SKIPPED";
 errorCount = 0;

console.log("Test Status: ", status);
console.log("Error Count: ", errorCount);


//status is "PASSED" OR "SKIPPED") AND errorCount equals 0
if((status==="PASSED" || status === "SKIPPED") && errorCount === 0){
    console.log("✅ Test completed successfully");
}
else {
    console.log("❌ Test has issues");
}

console.log();

 status = "PASSED";
 errorCount = 2;

console.log("Test Status: ", status);
console.log("Error Count: ", errorCount);


//status is "PASSED" OR "SKIPPED") AND errorCount equals 0
if((status==="PASSED" || status === "SKIPPED") && errorCount === 0){
    console.log("✅ Test completed successfully");
}
else {
    console.log("❌ Test has issues");
}

console.log();

 status = "FAILED";
 errorCount = 0;

console.log("Test Status: ", status);
console.log("Error Count: ", errorCount);


//status is "PASSED" OR "SKIPPED") AND errorCount equals 0
if((status==="PASSED" || status === "SKIPPED") && errorCount === 0){
    console.log("✅ Test completed successfully");
}
else {
    console.log("❌ Test has issues");
}



console.log();
console.log("Response Time Test");
console.log("Threshold: 3 seconds");

let responseTime = 2.5;

console.log("Actual: ", responseTime , "seconds");
if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: " ,responseTime, "seconds)")
}
else {
    console.log("❌ Performance test FAILED (response time: ", responseTime , "seconds", "threshold: 3 seconds)");
}

console.log();
console.log("Response Time Test");
console.log("Threshold: 3 seconds");

responseTime = 3.0;

console.log("Actual: ", responseTime , "seconds");
if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: " ,responseTime, "seconds)")
}
else {
    console.log("❌ Performance test FAILED (response time: ", responseTime , "seconds", ", threshold not less than 3 seconds)");
}

console.log();
console.log("Response Time Test");
console.log("Threshold: 3 seconds");

 responseTime = 2.999;

console.log("Actual: ", responseTime , "seconds");
if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: " ,responseTime, "seconds)")
}
else {
    console.log("❌ Performance test FAILED (response time: ", responseTime , "seconds", "threshold: 3 seconds)");
}

console.log();
console.log("Response Time Test");
console.log("Threshold: 3 seconds");

 responseTime = 3.5;

console.log("Actual: ", responseTime , "seconds");
if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: " ,responseTime, "seconds)")
}
else {
    console.log("❌ Performance test FAILED (response time: ", responseTime , "seconds", "threshold: 3 seconds)");
}




