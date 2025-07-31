const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// console.log(fruits);

/*
=> The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
*/

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

// console.log(months);
// console.log(sorted);

//this sort method won't fully work in numerical values

const numbers = [23, 4, 6, 12, 1, 56, 7, 3]
// numbers.sort()
// console.log(numbers) // [1, 12, 23, 3, 4, 56,  6, 7]

// sorting way

numbers.sort(function (a, b) { return a - b }) // ascending
console.log(numbers)
numbers.sort(function (a, b) { return b - a }) // descending
console.log(numbers)