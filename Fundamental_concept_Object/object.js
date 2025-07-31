// Objects are variables too. But objects can contain many types of values.

/**
 Js object are define:

 => Using an Object Literal [An object literal is a list of name:value pairs inside curly braces {}.]
 => Using the "new" Keyword 
 => Using an Object Constructor 

 */

//Creating a JavaScript Object - One
const car = {
    brand: "Volvo",
    model: "MX34",
    Mileage: 60,
    color: "white"
}



//Creating a JavaScript Object - two
const car1 = {};

car1.brand = "Volvo"
car1.model = "MX34"
car1.Mileage = 60
car1.color = "white"

//Creating a JavaScript Object - three (Using the new Keyword)

const car2 = new Object();

car2.brand = "Volvo"
car2.model = "MX34"
car2.Mileage = 60
car2.color = "white"

// console.log(car2)

//ou can access object properties in two ways:
//1. objectName["propertyName"]
//2. objectName.propertyName

// console.log(car.brand);
// console.log(car["color"]);


const exam_result = {
    student_roll: 3,
    result: {
        Math: 80,
        Physics: 88,
        Bangla: 82
    },
    'fullmark':300,
    topTenRoll:[3, 4, 2, 1, 67, 5, 8, 9, 10, 24],
    highestTotalMarks: 250,
    teacherComment: "Verry Good",
    canGetscholarship: true
}

//access top 6th student roll from topTenRoll
// console.log(exam_result.topTenRoll[5]) //index start from 0

//how many number got any Bangla
// console.log(exam_result.result.Bangla)

//access the fullMark
console.log(exam_result.fullmark)
console.log(exam_result["fullmark"])

//so an object can contain many types of data and many nested data

