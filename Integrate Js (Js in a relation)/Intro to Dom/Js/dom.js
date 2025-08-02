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
console.log(li_collection)

for(const li of li_collection)
{
    // console.log(li.innerText)
}