const today = new Date()

// console.log(today)

const specificDate = new Date(2050, 6, 24); // here month is index (0 based) wise 6 means, the 7th month 
console.log(specificDate)
console.log(specificDate.getFullYear())
console.log(specificDate.getMonth()) // return the month index
console.log(specificDate.toLocaleDateString()) // 7/24/2050
specificDate.setMonth(10)
console.log(specificDate)
console.log(specificDate.toLocaleString("en-GB"))