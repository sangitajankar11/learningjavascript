//Defining an object to represent an employee with key-value pairs
let employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "IT",
    DOB: "1990-01-01",

  //Method: Adding a method to the employee object
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I work as a " + this.position + ".");
    } ,
    
  //short-hand method definition
  //this refers to the current object (employee) and allows us to access its properties
  

    farewell() {
        console.log("Goodbye from " + this.name + "!");
    }  
};

//printing an object
console.log(employee);

//Accessing object properties using dot notation
console.log("Employee Name: ", employee.name);
console.log("Employee Age: "+ employee.age);  

//Accessing object properties using bracket notation
console.log("Employee Position: ", employee["position"]);
console.log("Employee Department: ", employee["department"]);

//Adding a new property to the object
employee.salary = 60000;
console.log("Employee Salary: ", employee.salary);

//Updating an existing property
employee.age = 31;
console.log("Updated Employee Age: ", employee.age);

//Deleting a property from the object
delete employee.DOB;
console.log("Employee after deleting DOB: ", employee); 

//check if a property exists in the object
console.log("Does employee have a 'name' property? ", "name" in employee);
console.log("Does employee have a 'age' property? ", "age" in employee);

delete employee.age;
console.log("Employee after deleting age: ", employee);
console.log("Does employee have a 'age' property? ", "age" in employee);


employee.greet();  // Calling the greet method
employee.farewell();  // Calling the farewell method 

//Method: Adding a method to the employee object to calculate years until retirement
employee.yearsUntilRetirement = function() {
    const retirementAge = 65;
    return retirementAge - this.age;
};

