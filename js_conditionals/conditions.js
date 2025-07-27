//syntax
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }

//You can use one if() and one else but you can use else if as many you needed

/*
    Suppose, you need to create a program a system on these conditions:
    If a person:
    -> has 200tk and is 18ys old then can enter the area.
    -> if he did not have 200tk or he is not at least 18yrs old then he/she should be
        180cm in height
    -> If he/she is not alsp 180cm in height then he/she should have parents consent
    ->if any of these are not satisfied then he/she could not enter in the area
*/
// const money = 300;
// const age = 17;
// const height = 176.6
// const hasConsent = true;

//we can also write like this
const money = 300, age = 17, height = 156, hasConsent = true;

if (money >= 200 && age >= 18) {
    console.log("You can enter in the area.");
}
else if (height >= 180) {
    console.log("You can enter in the area.");
}
else if (hasConsent) {
    console.log("You can enter in the area.");
}
else {
    console.log("No, You could not enter in the area.");
}


// alternative and shortcut way
if ((money >= 200 && age >= 18) || (height >= 180) || hasConsent) {
    console.log("You can enter in the area.");
}
else {
    console.log("No, You could not enter in the area.");
}