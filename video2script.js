/*ARRAY FILTER METHOD*/

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);
console.log(items);

/*MY EXAMPLE*/
const participants = [
  { name: "Andrew", age: 32 },
  { name: "Yanli", age: 15 },
  { name: "Terri", age: 20 },
  { name: "Olu", age: 31 },
  { name: "Leon", age: 38 },
];
const filteredParticipants = participants.filter((participants) => {
  return participants.age <= 35;
});
console.log(filteredParticipants);

/* MAP - returns a new array*/
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

const participantNames = participants.map((participants) => {
  return participants.name;
});
console.log(participantNames);

/*FIND METHOD - finds a value within the array with the specfied name*/
const foundItem = items.find((item) => {
  return item.name === "Computer";
});
console.log(foundItem);

const foundParticipants = participants.find((participants) => {
  return participants.age === 29;
});
console.log(foundParticipants);

/* FOR EACH -  does NOT return anything, so NO 'const' or 'return' needed
-FOR EACH item in the list console.log the item name*/
items.forEach((item) => {
  console.log(item.price);
});

participants.forEach((participants) => {
  console.log(participants.name);
});

/* SOME - checks array to see ANY of the items meet the given criteria. Returns TRUE if ONE or more items meet the criteria OR FALSE*/
const hasInexpensiveItems = items.some((items) => {
  return items.price <= 0;
});
console.log(hasInexpensiveItems);
/* EVERY - sees if EVERY item in the array meets the criteria. Returns true or false*/

const isAdult = participants.every((participants) => {
  return participants.age <= 21;
});
console.log(isAdult);

/*REDUCE - adds all the values in the array WITHOUT a for loop
- starts at 0 and adds the value of the first item to 0, that summation becomes the new total*/
/* QUESTION: When would we need to do this instead of a for loop if it is more complicated?*/
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

const totalAge = participants.reduce((currentTotal, participants) => {
  return participants.age + currentTotal;
}, 0);

console.log(totalAge);

/* INCLUDES METHOD - BEST used with JUST number arrays*/
const newItems = [3, 6, 9, 22];
const includesTwelve = newItems.includes(12);
console.log(includesTwelve);
