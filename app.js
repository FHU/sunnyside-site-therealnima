// step 1: get the things 
const hamburgerMenu= document.getElementById('hamburger-menu');
const mobileMenu= document.getElementById('mobile-menu');    
// step 2: add the event listener
hamburgerMenu.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle('hidden');
})