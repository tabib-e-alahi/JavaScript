const numbers = [45, 4, 9, 16, 25];


for (let x in numbers) {
    console.log(numbers[x])
}

/*
========= When to use:

-> When iterating over the properties (keys) of an object.
-> It’s best for working with objects to loop through keys and their corresponding values.
-> It can also be used for arrays, but it’s less efficient than other methods (e.g., for or for...of).
*/