function square(number) // here 'number' is the parameter of this function
{
    console.log(number * number);
}

square(10) // here 10 is the arguments

//reusing

square(34)
square(50)

/**
 * -------------- Parameters vs. Arguments -------------- 

    => In JavaScript, function parameters and arguments are distinct concepts.
    => Parameters are the names listed in the function definition.
    => Parameters are the names of the values that will be passed.

 */
//"name" and "age" are parameters
function greet(name, age) {
  return `Hello $name! You are ${age} years old.`;
}

const out = greet("John", 21); // "John" and 21 are arguments
console.log(out)