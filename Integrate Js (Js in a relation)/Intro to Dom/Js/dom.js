/*
====# What is DOM?
=> The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


###### What Javascript can do with DOM?

With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    => JavaScript can change all the HTML elements in the page
    => JavaScript can change all the HTML attributes in the page
    => JavaScript can change all the CSS styles in the page
    => JavaScript can remove existing HTML elements and attributes
    => JavaScript can add new HTML elements and attributes
    => JavaScript can react to all existing HTML events in the page
    => JavaScript can create new HTML events in the page

*/

console.log("Js connected to HTML.")
// console.log(document.body)

const li_collection = document.getElementsByTagName('li')
// console.log(li_collection)

for (const li of li_collection) {
    // console.log(li.innerText)
}

const food_list = document.getElementsByClassName("food");
console.log(food_list[0]);
const food_title = document.getElementById("food-title");
console.log(food_title.innerText);
//change the food title
food_title.innerText = "Food title changed from source code.";

const foreign_class = document.getElementsByClassName("foreign");
for (const for_class of foreign_class) {
    console.log(for_class.innerText);
}

const foreign_class_with_querySelector = document.querySelectorAll(".foreign");
console.log(foreign_class_with_querySelector)

//getElementsByClassName vs querySelectorAll
/*
1. Return:
    => getElementsByClassName return An HTMLCollection (live collection).
    => querySelectorAll return A NodeList (static collection).
    
2. Live vs static collection:
    => Live: updates automatically if the DOM changes.
        Example: If you add a new element with the same class later, it appears in the collection.
    
    => Static → does not update when the DOM changes.
        Example: Adding a new element later won’t affect the NodeList.

3. Access:
    => HTMLCollection works like an array but not truly an array. Use items[0], but not forEach directly (convert first: Array.from(items)).
    => NodeList works more like an array. You can use forEach directly.

*/

//Example:
const live = document.getElementsByClassName("item");
const staticList = document.querySelectorAll(".item");

console.log(live.length);      // 2
console.log(staticList.length); // 2

// Add a new <li>
const li = document.createElement("li");
li.className = "item";
li.textContent = "C";
document.querySelector("ul").appendChild(li);


console.log(live.length);      // 3 (updated automatically)
console.log(staticList.length); // 2 (unchanged)