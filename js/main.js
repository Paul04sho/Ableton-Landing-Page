// Select elements
const moreContent = document.querySelector('.collapsible-content-container');
const moreBtn = document.querySelector('.collapsible-toggle');
const toggleIcon = document.querySelector('.bx-plus');

let collapsibleOpen = false;

// Function to toggle the More + button
function handleCollapsible () {
    collapsibleOpen = !collapsibleOpen;
    moreContent.classList.toggle('open-collapsible');

   if(collapsibleOpen) {
    toggleIcon.classList.add("bx-minus");
    toggleIcon.classList.remove("bx-plus");
   } else {
        toggleIcon.classList.remove("bx-minus");
        toggleIcon.classList.add("bx-plus");
   }
}
