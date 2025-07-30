const home = "Ma Villa";
const road = `Dada More`;
const post_office = `5600`;
const thana = new String('Kurigram');

// console.log(typeof home); // string
// console.log(typeof road); // string
// console.log(typeof post_office); // string
// console.log(typeof thana); // object

// console.log(thana); // [String: 'Kurigram']

console.log(home.length);
console.log(home[0]);
//string indexing behave like array
//But string is immutable , you can not change string with index value
home[3] = 'P'; // It won;t change anything
console.log(home);