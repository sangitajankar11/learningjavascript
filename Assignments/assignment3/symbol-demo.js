/*
### Part 5: Symbol — Unique Identifiers

Create `symbol-demo.js` to explore Symbol uniqueness.

**Requirements:**
1. Create two Symbols with the same description `"testId"`
2. Compare them with `===` — print the result
3. Print `typeof` each Symbol
4. Print `.description` of each Symbol
5. **Bonus:** Use two Symbols as keys on the same object and verify they don't overwrite each other

**Test Cases:**
```javascript
let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       // What do you expect?
console.log(typeof sym1);         // What type is it?
console.log(sym1.description);    // What prints here?
*/

let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       // What do you expect?
console.log(typeof sym1);         // What type is it?
console.log(sym1.description);    // What prints here?
console.log();

console.log(typeof sym2);         
console.log(sym2.description);


