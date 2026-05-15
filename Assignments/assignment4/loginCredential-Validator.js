function validateCompleteUser(username, password, email, age) {
  
  console.log("Validating test user...\n");
  console.log("Validating username...");
  if (username == "" || username.length < 3 || username.length > 20) {
    return "Username must be between 3 and 20 characters.";
  }

  console.log("Validating password...");
  if (password!== "" && password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  console.log("Validating email...");
  if (email== "" || !email.includes("@") || !email.includes(".")) {
    return "Email must not be empty and must contain '@' and '.'.";
  }

  console.log("Validating age...");
  if (age === null || age === undefined || age < 18 || age > 120) {
    return "Age must be between 18 and 120.";
  }

  // If all checks pass
  return "✅ All validations passed - User is valid!";
}

let result = validateCompleteUser(
    "testuser",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);

console.log();
result = validateCompleteUser(
    "ab",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);


