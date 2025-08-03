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

const playerContainer = document.getElementById("player-list");
playerContainer.style.fontSize = "24px"; 
playerContainer.style.fontWeight = "800";
playerContainer.style.color = "steelblue";
 