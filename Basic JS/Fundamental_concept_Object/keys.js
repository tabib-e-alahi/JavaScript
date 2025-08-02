const car = {
    brand: "Volvo",
    model: "MX34",
    Mileage: 60,
    color: "white"
}

//getting all the keys

// const keys = Object.keys(car);

// console.log(keys); // [ 'brand', 'model', 'Mileage', 'color' ]

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

const keys = Object.keys(exam_result);

console.log(keys);