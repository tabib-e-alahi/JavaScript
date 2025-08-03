const sections = document.querySelectorAll("section");
// console.log(sections)

for(const section of sections)
{
    section.style.border = "2px solid brown";
    section.style.width = "fit-content";
    section.style.padding = "10px";
    section.style.marginBottom = "20px";
    section.style.borderRadius = "10px";
    section.style.backgroundColor = "lightgray"
}

//If want to style a specific element, then the best practice is use "id"

const player = document.getElementById("player-list");
player.style.fontSize = "24px"; 
player.style.fontWeight = "800";
player.style.color = "steelblue";

// const playerContainer = document.getElementById("players-container");
// playerContainer.style.backgroundColor = "yellow"

//adding with classList
const playerContainer = document.getElementById("players-container");
playerContainer.classList.add("yellow_bg");

//remove a class
playerContainer.classList.remove("yellow_bg")
 