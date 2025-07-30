//The while loop loops through a block of code as long as a specified condition is true.

// let num = 0;

// while(num < 10)
// {
//     console.log("Loope is ruuing", num);

//     num += 1; // need to update variable, otherwise loop will run infinitely
// }


let sum = 0;
let num = 1;

while(num <= 10)
{
    sum += num;
    num += 1;
}

console.log("Sum",sum)


/*
===== When to use:

-> When you don't know the exact number of iterations, but you know the condition that must be true to continue looping.

-> It's best used when the loop should run until a certain condition is met (e.g., a flag becomes false, or a value reaches a specific number).
*/