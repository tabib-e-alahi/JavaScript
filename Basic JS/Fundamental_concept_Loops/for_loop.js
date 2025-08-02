/*
------- When to use:

-> When you know the number of iterations or need to iterate over a range of numbers or indices.
-> It's best used when you have a fixed start, end, and step value, like iterating through arrays, strings, or performing repeated tasks a set number of times.

*/

// for(let num = 0; num < 20; num++)
// {
//     console.log(num);
// }

for(let i = 1; i <= 10; i++)
{
    if(i % 2 == 0)
    {
        console.log(i ,"is even");
    }
    else{
        console.log(i ,"is odd");
    }
}

for(let i = 20; i > 0; i--)
{
    console.log(i);
}