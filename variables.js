//var firstName = "Jamila";
//var age = 21;
//var isFemale = true;
//var balance = 100.32;
//var dob = new Date(2000, 0, 10);
//var person = {};
//var empty = undefined;
//
//console.log(typeof firstName);
//console.log(typeof age);
//console.log(typeof isFemale);
//console.log(typeof balance);
//console.log(typeof dob);
//console.log(typeof person);
//console.log(typeof empty);
//
//
// var brand = "Tanbrand";
//console.log(typeof brand);
//console.log(brand.length);
//console.log(brand.toUpperCase());
//console.log(brand.substring(0, 3));*/
//
//var a = "Tan";
//var b = "coding";
//var c = "again";
//var d = "is";
//var e = "hilarious";
//console.log(a + " " + b);
//console.log(`${a}       ${b}`);
//console.log(`${a.toUpperCase()} ${b} ${c.charAt(1)} ${d} ${e}`);*/
//
//var person = {
//  firstName: "Jamila",
//  age: 21,
//  isFemale: true,
//  balance: 100.32,
//  dob: new Date(200, 0, 10).toJSON(),
//  address: {
//    city: "Birmingham",
//    postCode: "B97",
//  },
//};
//console.log(person.firstName);
//console.log(person.age);
//console.log(person.balance);
//console.log(person.address.city);
//console.log(Object.values(person));
////console.log(Object.keys(person));

//all variables keys and values printed
//console.log(JSON.stringify(person));
//
// Boolean
//var isAdult = true;
//{
//if (isAdult) {
//  console.log("!True" "is an adult:)");
//} else {
//  console.log("is not an adult :(")
//}
//
//
//Arrays;
//var names = ["Tan", "Joe", "Jamila", "Alisha"];
//console.log(names[0]);
//console.log(names[3]);
//console.log(names[2]);

// concat 2 strings with a '+'
//console.log("Index 0 -" + names[0]);

// Number of items in an array
//console.log("Size = " + names.length);
//
//Arithmetic Operations'

//var addition = 2 + 2;
//var subtraction = 2 - 2;
//var division = 10 / 2;
//var multiplication = 10 * 2 + 3 - 5;
//var remainder = 10 % 4;

// exponentation = 3 * 3 * 4
//var exponentation = 3 ** 4;

//console.log(addition);
//console.log(subtraction);
//console.log(division);
//console.log(multiplication);
//console.log(remainder);
//console.log(exponentation);

//Functions
//var addition = 2 + 2;
//console.log(addition);

//function addNumbers(number1, number2, number3) {
//  var addition = number1 + number2 * number3;
//  //console.log(addition);
//  return addition;
//}

//var result1 = addNumbers(2, 3, 5);
//console.log(result1);
// A function may or may not returna value. Why would you not want a functon to return a value? To feed it into another function?

//Inbuilt functions
//var person = {
//  name: "Tan",
//  age: 109,
//};
//Object.values is a function that prints the values for any object.
//console.log(Object.values(person));
//console.log(Object.keys(person));
//console.log(person.age);
// WHY won't console.log(Object.age.repeat(person) work as part of the object?

//console.log("Jamila".toUpperCase()); //empty brackets calls the inbuilt toUppercase function.
//console.log("Tan".toLowerCase());
//console.log(person.name.replace("Tan", "Pokemom3"));
//console.log("Tan".indexOf("n"));

//Loops
// i(andrew- any name can be used i is just the name of the variable) is variable name = starting point 0, whle 1 is less or equal to 10, keep adding 1 (i++)
// for (var andrew = 0; andrew <= 5; andrew++) {
//   console.log(andrew);
// }

// For Loop. As long as [i] is less than the number of names in the list(.length) keep printing names.
//console.log("for i");
//var names = ["Tan", "Pokemom3", "Ty", "Jamila", "Reanne"];
//for (var i = 0; i < names.length; i++) console.log(names[i]);
//
//console.log();
//
//console.log("for of:");
//for (const name of names) {
//  console.log(name);
//}
//
//console.log();
//console.log("for each:");
//names.forEach(function (name) {
//  console.log(name);
//});

//While loops(boolean)
//Prints while a conition is true otherwise nothing prints.
//var index = 0;
//var names = ["Tan", "Pokemom3", "Ty", "Jamila", "Reanne"];
//while (index < names.length) {
//  console.log(names[index]);
//  index = index + 1;
//}

//console.log(10 == 10);
//console.log(10 != 7);
//var i = 0;
//while (i < 10) console.log("hello");

//while (false) {
//  console.log("today");
//}

//Do while
//Break and continue are used with for/  while looset propertyName(value) {

//if i is less than 5 CONTINUE to run the code again. Run the code up to number 10.
//for (var i = 0; i <= 10; i++) {
//  if (i < 5) {
//    continue;
//  }
//  console.log(i);
//}

//for (var i = 0; i <= 10; i++) {
//  console.log(i);
//  if (i == 5) {
//    break;
//  }
//}

//INCREMENT and Decrement POSTFIX ++ --
//var number = 0;
//var numberTwo = 0;
//increments the number and returns the number BEFORE it gets bigger. So incrementing to 1 but the number before 1 is 0.
//POSTFIX
//console.log(numberTwo--);
//console.log(number++);

//PREFIX

//console.log(++number);
//console.log(++numberTwo);
//console.log(--numberTwo);

//console.log(10 < 7);

//console.log(10 == 10 && "A" == "B");
//console.log(20 == 21 || "A" != "B" || 2 == 2);
