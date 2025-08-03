console.log("append.js is running.")

//adding a new list item in the address section

const container = document.getElementById("list_container");

const new_li = document.createElement("li");
new_li.innerText = "Upazilla: Kurigram Sadar (added with JS)";
container.appendChild(new_li);