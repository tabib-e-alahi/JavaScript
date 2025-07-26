var a = 20
var b = 0.5
var c = '34'
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

//convert numerical string to numeric
var numeric_c = parseInt(c)
// console.log(numeric_c, typeof numeric_c)
//but if we try to convert a text string, it will give NaN(Not A Number)
var name = "Tabib"
var convert_name = parseInt(name)
console.log(convert_name)
console.log(typeof convert_name)