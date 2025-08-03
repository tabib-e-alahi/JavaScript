console.log("append.js is running.")

//adding a new list item in the address section

// step-1: where to add (parent node)
const container = document.getElementById("list_container");

// step-2: what to be added
const new_li = document.createElement("li");
new_li.innerText = "Upazilla: Kurigram Sadar (added with JS)";

// step-3: add the new child
container.appendChild(new_li);


//creating a new section ========================

// step-1: where to add (parent node)
const parent_node = document.getElementById("main_container");

// step-2: what to be added
const section = document.createElement("section");
section.innerHTML = `
    <h1>Players List (THis section is dynamically created)</h1>
    <ul id="player-list">
        <li>Messi</li>
        <li>Pele</li>
        <li>Ronaldo</li>
        <li>Embape</li>
        <li>Chele</li>
    </ul>`

// step-3: add the new child
parent_node.appendChild(section);
section.classList.add("align_items")
section.style.marginTop = "20px"

