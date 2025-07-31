const txt = "My name is Tabib";
//slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// const name = txt.slice(11,txt.length);
//or
const name = txt.slice(11);// default the end pos is the length
console.log(name);

const word = txt.slice(3,8);
console.log(word);

console.log(txt.slice(-9));