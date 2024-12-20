// Menu button and navbar selection
const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

// Toggle menu icon and navbar visibility when menu button is clicked
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times'); // Toggle the menu icon (hamburger to close)
    navbar.classList.toggle('active');  // Toggle the navbar visibility
});

// Close navbar when scrolling on the page
window.addEventListener('scroll', () => {
    // Only remove active class if navbar is open
    if (navbar.classList.contains('active')) {
        menu.classList.remove('fa-times'); // Reset menu icon
        navbar.classList.remove('active'); // Close the navbar
    }
});
