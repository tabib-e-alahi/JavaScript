const fruits = ["Banana", "Orange", "Apple", "Mango", "Grape", "Cherry"];

console.log(fruits.includes("Apple")) //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(fruits.includes("Malta"))

if(fruits.includes("Grape"))
{
    console.log("Grape is in stock.");
}
else{
    console.log("Grape is not in stock.")
}