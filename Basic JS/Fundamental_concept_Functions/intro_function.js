/**
 ** What are Functions?
    => Functions are fundamental building blocks in all programming.
    => Functions enable better code organization, modularity, and efficiency.
    => Functions are reusable block of code designed to perform a particular task.
    => Functions execute when they are "called" or "invoked".

 ** Why Functions?
    => With functions you can reuse code
    => You can write code that can be used many times.
    => You can use the same code with different arguments, to produce different results.
 */

const number = 67

function print_value(num)
{
    console.log(num);
}

// print_value(number)

function add_values(num1, num2)
{
   console.log(num1 + num2)
}

//resuning
// add_values(45, 55)
// add_values(45, 78)
// add_values(40, 48)

//for using a function, you need to call it functionName(parameters) , parameters are optional, depends on you are using parameters or not.

function print_sentences()
{
   console.log("this is a function with no parameters.")
}

print_sentences()