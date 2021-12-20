//IF statements
//
//var condition = 10 > 20;
//
//if (condition) {
//  console.log("Keep going...");
//} else {
//  console.log("else condition running?");
//}

//var gender = "Male";
////
//if (gender == "Male") {
//  console.log("Male");
//} else if (gender == "Female" || "TIGER") {
//  console.log("F");
//} else {
//  console.log("Unknown");
//}

//CAN USE SWITCH statements nstead of IF statements
var gender = "Male";

switch (gender) {
  case "Male":
    console.log("M");
  case "Female":
    console.log("F");
    break;
  default:
    console.log("Unknown");
}

//Ternary If Statements - making If statements less complicated - used with SIMPLE 2 condition if statements

/*var number = 6;
//Asking (?) IF the number is a multiple of 2 (remainder 0 %) then print even ELSE(:) print Odd
var result = number % 2 == 0 ? "Even" : "Odd";
console.log(result);*/

//CONST
const brand = "Tan's coding";
const brandObject = {};
brandObject["brand"] = brand;
//delete brandObject.brand;
//brand = 10;
brand = function () {
  return "hello";
};
console.log(brand);
console.log(brandObject);

const hello = function () {};
hello = 1;
console.log(hello);
