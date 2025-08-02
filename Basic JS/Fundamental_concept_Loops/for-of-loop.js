/*
The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
*/

const numbers = [17, 29, 45, 67, 76, 45];
//Looping over an Array
for (const num of numbers) {
    console.log(num);
}

//Looping over a String
let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}

console.log(text)

/*

==== When to use:

-> When iterating over values of iterable objects like arrays, strings, Maps, Sets, etc.
-> Best for arrays or array-like objects where you need to access the values directly (not the keys/indexes).

*/