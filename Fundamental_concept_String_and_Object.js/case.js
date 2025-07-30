const subject = "chemistry";
const book = "Chemistry";

console.log(book === subject); // false

//lowercasing string
console.log(book.toLowerCase());

//uppercasing string

console.log(subject.toUpperCase());

const drink = ' water ';

//removing whitespace
console.log(drink.trim());//remove whitespace from both start and end
console.log(drink.trimStart());//remove whitespace from start
console.log(drink.trimEnd());//remove whitespace from end