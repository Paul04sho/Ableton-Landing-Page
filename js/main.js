// Select elements
const moreBtn = document.querySelector('.btn a');
const moreMenu = document.querySelector('.more-menu');

// Toggle function to open the menu
function toggleMenu(e) {
    e.preventDefault();
    moreMenu.classList.toggle('hidden');

    // Change text of the button
    moreBtn.textContent = moreMenu.classList.contains('hidden') ? 'More +' : 'More –';
}

// To close the menu if we click elsewhere
function closeMenuOnClickOutside(e) {
    if(!moreMenu.classList.contains('hidden')) {
        const isClickInside = moreMenu.contains(e.target) || moreBtn.contains(e.target);
        if(!isClickInside) {
            moreMenu.classList.add('hidden');
            moreBtn.textContent = 'More +';
        }
    }
}

// Event listeners
moreBtn.addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuOnClickOutside);


