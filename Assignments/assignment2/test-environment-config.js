
/*
**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create at least 6 variables
- Print them in a formatted way

**Variables to create:**
1. Application URL (constant)
2. Application name (constant)
3. Environment name (QA, Staging, Production)
4. Current tester name
5. Test execution date
6. Is automation enabled? (we'll use text for now)
*/

const APP_URL = "https://www.sbi.in";
const APP_NAME = "Banking application";
let envName = "QA";
let testerName = "Sangita Jankar";
let date= "2026-04-26";
let automation = "Yes"

console.log("");
console.log("===================================================");
console.log("        TEST ENVIRONMENT CONFIGURATION            ");
console.log("====================================================");
console.log("");

console.log("App Name: " +APP_NAME);
console.log("App URL: " +APP_URL);
console.log("Test Environment: " +envName);
console.log("Tester Name: " +testerName);
console.log("Date: "+date);
console.log("Automation Enabled: " +automation);



