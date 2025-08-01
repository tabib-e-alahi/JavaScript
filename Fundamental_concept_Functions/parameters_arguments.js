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

// we can set, any data types as parameters, depends on out need, we can use array, string, boolean, object etc. 

// default parameters: if we use parameter and set a deault value for it. The in function calling we do not give the value, then the default will be print

function getValues(num1, num2 = 5)
{
  console.log(num1, num2);
  console.log(num1 + num2);
}

getValues(10, 20);
getValues(10)